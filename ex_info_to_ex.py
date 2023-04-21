# python3 ex_info_to_ex.py
import json
import pprint
import esprima # esprima==4.0.1
import escodegen # escodegen==1.0.11, esutils==1.0.1

# import examples' source
xkcd_js_src = open("temp/xkcd_src.js").read()
xkcd_html = """<div id="comic"><div className="map"><div className="ground"></div></div></div>"""

src_to_use = xkcd_js_src
html_to_use = xkcd_html

fi = open("ordering.js")
ordering = json.loads(fi.read())
# pprint.pprint(ordering)
lines_to_splice_in = [] # global variable
global_depth = 0 # for debugging

def instrument(t, vars_to_track):
    global global_depth # for debugging
    global_depth += 1
    # print("global_depth", global_depth)
    if hasattr(t, "type"):
        print("t type: ", t.type)
        # print(escodegen.generate(t)[:100])
    if hasattr(t, "body"):
        # print("t has a body, going in")
        instrument(t.body, vars_to_track)
    if isinstance(t, list):
        # print("t is a list")
        for body_elem in t:
            # print("body_elem:", body_elem)
            instrument(body_elem, vars_to_track)
    if hasattr(t, "consequent"): # if statement
        if t.consequent:
            instrument(t.consequent, vars_to_track)
    if hasattr(t, "expression"): # expression with left hand side
        if t.expression and t.expression.left:
            if t.expression.left.name in vars_to_track:
                print("need to track", t.expression.left.name, "at", t.expression.left.loc)
                lines_to_splice_in.append({"variable": t.expression.left.name, "line": t.expression.left.loc.end.line})
        instrument(t.expression, vars_to_track)
    if hasattr(t, "declarations"): # variable declaration
        if t.declarations:
            for decl in t.declarations:
                if decl.id.name in vars_to_track:
                    print("need to track", decl.id.name, decl.id.loc)
                    lines_to_splice_in.append({"variable": decl.id.name, "line": decl.id.loc.end.line})
                if decl.init.type == "FunctionExpression":
                    instrument(decl.init, vars_to_track)
    if hasattr(t, "alternate"): # else statement
        if t.alternate:
            instrument(t.alternate, vars_to_track)
    if hasattr(t, "callee"): # obj.method() could modify object
        if hasattr(t.callee, "object"):
            if hasattr(t.callee.object, "callee"):
                if t.callee.object.callee and t.callee.object.callee.name in vars_to_track:
                    print("need to track", t.callee.object.callee.name, t.callee.object.callee.loc)
                    lines_to_splice_in.append({"variable": t.callee.object.callee.name, "line": t.callee.object.callee.loc.end.line})
                else:
                    if t.callee.object and t.callee.object.name in vars_to_track:
                        print("need to track", t.callee.object.name, t.callee.object.loc)
                        lines_to_splice_in.append({"variable": t.callee.object.name, "line": t.callee.object.loc.end.line})
    if hasattr(t, "left"):
        if t.left:
            if hasattr(t.left, "object"):
                if t.left.object and t.left.object.name in vars_to_track:
                    print("need to track", t.left.object.name, t.left.object.loc)
                    lines_to_splice_in.append({"variable": t.left.object.name, "line": t.left.object.loc.end.line})
    if hasattr(t, "init"):
        if t.init:
            instrument(t.init, vars_to_track)
    if hasattr(t, "arguments"): # cover async functions
        if len(lines_to_splice_in) > 0 and lines_to_splice_in[-1]["line"] == t.loc.start.line and t.loc.end.line > t.loc.start.line: # expression includes arguments that expand over one line so we can't splice in till the very end
            lines_to_splice_in[-1]["line"] = t.loc.end.line
        instrument(t.arguments, vars_to_track)
    global_depth -= 1

def modify_js_to_track_vars(src_code, vars_to_track):
    t = esprima.parseScript(src_code, options={'loc': True})
    # print(t)
    print("vars_to_track:", vars_to_track)
    instrument(t, vars_to_track)
    print("lines_to_splice_in:")
    pprint.pprint(lines_to_splice_in)
    src_code_lines = src_code.split("\n")
    modified_lines = src_code_lines.copy()
    num_lines_spliced_in = 0
    for line_to_splice_in in lines_to_splice_in:
        var_name_to_use = line_to_splice_in["variable"].replace("$", "d")
        modified_lines.insert(line_to_splice_in["line"] + num_lines_spliced_in, """$('#""" + var_name_to_use + """')[0].innerHTML = JSON.stringify(`${""" + line_to_splice_in["variable"] + """}`)""")
        num_lines_spliced_in += 1
    modified_src_code = "\n".join(modified_lines)
    print("modified_src_code:", modified_src_code)
    return modified_src_code

def get_var_html(vars_to_track):
    html_of_vars = ""
    for var_to_display in vars_to_track:
        var_to_display_fixed = var_to_display.replace("$", "d")
        html_of_vars += "<p>" + var_to_display + " = " + "<span id='" + var_to_display_fixed + "'> </span>" + " </p>\n"
    return html_of_vars

for i, ex in enumerate(ordering):
    print("===Writing ex:", str(i), "===")
    vars_to_track = [ex['domObj']] if ex['domObj'] else []
    for oe in ex['otherElemsIncluded']:
        if oe not in vars_to_track:
            vars_to_track.append(oe)
    for v in ex['variables']:
        if v not in vars_to_track:
            vars_to_track.append(v)

    lines_to_splice_in = [] # reset lines to splice in
    # pprint.pprint(ex)
    eg = open("../scaffolded-exercises-interface/src/pages/auto-exercise" + str(i) + ".js", "w+") # path to SEI
    eg.write("""import React from 'react';
import './../App.css';
import $ from 'jquery';
window.$ = $;

export default class ExerciseAG""" + str(i) + """ extends React.Component {
    componentDidMount() {
        """ + modify_js_to_track_vars(src_to_use, vars_to_track) + """
    }

    render() {
        return (
            <div className="App">
                <div id="app-title">Scaffolded Exercises</div>
                <br/><br/><br/>
                DOM
                """ + html_to_use + """
                <br/>
                <div className="exercises">
                    Variables:
                    <br/><br/>
                    """ + get_var_html(vars_to_track) + """
                    <div className="reflection-area">
                        <p>As you interact with the screen, what is happening visually? What is happening to the variable values shown above?</p>
                        <textarea className="reflection-textarea" rows="6"></textarea>
                        <p>What is happening in the code?</p>
                        <textarea className="reflection-textarea" rows="6"></textarea>
                        <p>What is the relationship between the following variables: """ + vars_to_track[0] + """?</p>
                        <textarea className="reflection-textarea" rows="6"></textarea>
                    </div>
                </div>
                <a href='/exercise-auto""" + str(i + 1) + """'>Next Exercise</a>
            </div>
        )
    }
}
    """)
    eg.close()

# print(esprima.parseScript(xkcd_js_src, options={'loc': True}))
