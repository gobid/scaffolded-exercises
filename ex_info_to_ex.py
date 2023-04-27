# python3 ex_info_to_ex.py
import json
import pprint
import esprima # esprima==4.0.1
import escodegen # escodegen==1.0.11, esutils==1.0.1

# CAREFUL but here's the command to remove autogen exercises, in SEI repo, rm -rf src/pages/auto-ex*.js
# THEN, remove unneeded exercises in SEI App.js and home.js

EXAMPLE = "XKCD" # MAPSTD

# import examples' source
xkcd_js_src = open("temp/xkcd_src.js").read()
xkcd_html = """<div id="comic"><div className="map"><div className="ground"></div></div></div>"""
xkcd_vars_to_skip = ["$overlay", "x", "y", "size"]
xkcd_vars_to_unfurl = ["name", "tile", "$remove", "$image"] # variables that appear in loops that should be unfurled

if EXAMPLE == "XKCD":
    src_to_use = xkcd_js_src
    html_to_use = xkcd_html
    vars_to_skip = xkcd_vars_to_skip
    vars_to_unfurl = xkcd_vars_to_unfurl

fi = open("ordering.js")
ordering = json.loads(fi.read())
# pprint.pprint(ordering)
lines_to_splice_in = [] # global variable
global_depth = 0 # for debugging
in_for_loop = 0
outer_loop_location = 0

def instrument(t, vars_to_track):
    global global_depth, in_for_loop, outer_loop_location # for debugging
    global_depth += 1
    if hasattr(t, "type") and t.type == "ForStatement": # consider as in for loop for all recursive calls beneath this
        in_for_loop = 1
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
                lines_to_splice_in.append({"variable": t.expression.left.name, "line": t.expression.left.loc.end.line, "in_for_loop": in_for_loop})
        instrument(t.expression, vars_to_track)
    if hasattr(t, "declarations"): # variable declaration
        if t.declarations:
            for decl in t.declarations:
                if decl.id.name in vars_to_track:
                    print("need to track", decl.id.name, decl.id.loc)
                    lines_to_splice_in.append({"variable": decl.id.name, "line": decl.id.loc.end.line, "in_for_loop": in_for_loop})
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
                    lines_to_splice_in.append({"variable": t.callee.object.callee.name, "line": t.callee.object.callee.loc.end.line, "in_for_loop": in_for_loop})
                else:
                    if t.callee.object and t.callee.object.name in vars_to_track:
                        print("need to track", t.callee.object.name, t.callee.object.loc)
                        lines_to_splice_in.append({"variable": t.callee.object.name, "line": t.callee.object.loc.end.line, "in_for_loop": in_for_loop})
    if hasattr(t, "left"):
        if t.left:
            if hasattr(t.left, "object"):
                if t.left.object and t.left.object.name in vars_to_track:
                    print("need to track", t.left.object.name, t.left.object.loc)
                    lines_to_splice_in.append({"variable": t.left.object.name, "line": t.left.object.loc.end.line, "in_for_loop": in_for_loop})
    if hasattr(t, "init"):
        if t.init:
            instrument(t.init, vars_to_track)
    if hasattr(t, "arguments"): # cover async functions
        if len(lines_to_splice_in) > 0 and lines_to_splice_in[-1]["line"] == t.loc.start.line and t.loc.end.line > t.loc.start.line: # expression includes arguments that expand over one line so we can't splice in till the very end
            lines_to_splice_in[-1]["line"] = t.loc.end.line
        instrument(t.arguments, vars_to_track)
    global_depth -= 1
    if hasattr(t, "type") and t.type == "ForStatement":
        in_for_loop = 0
        if not outer_loop_location:
            outer_loop_location = t.loc.start.line

def modify_js_to_track_vars(src_code, vars_to_track):
    global in_for_loop, outer_loop_location
    print("outer_loop_location", outer_loop_location)
    added_reset_unfurlables = False
    t = esprima.parseScript(src_code, options={'loc': True})
    # print(t)
    print("vars_to_track:", vars_to_track)
    instrument(t, vars_to_track)
    print("lines_to_splice_in:")
    pprint.pprint(lines_to_splice_in)
    src_code_lines = src_code.split("\n")
    modified_lines = src_code_lines.copy()
    num_lines_spliced_in = 0
    for li, line_to_splice_in in enumerate(lines_to_splice_in):
        if li + 1 < len(lines_to_splice_in) and lines_to_splice_in[li + 1]["line"] >= outer_loop_location and not added_reset_unfurlables: # the next line to splice in is going to be after the loop, so better reset unfurlables first
            print("in unfurlables if")
            reset_unfurlables_js = ""
            for unfurlable in vars_to_unfurl:
                reset_unfurlables_js += "try { $('#" + unfurlable.replace("$", "d") + "')[0].innerHTML = ''; } catch { console.log('1 unfurlable not on this page.'); } selectors['" + unfurlable.replace("$", "d") + "'] = [];"
            modified_lines.insert(outer_loop_location - 1 - 1 + num_lines_spliced_in, reset_unfurlables_js) # -1 for index, -1 for going before first for loop
            added_reset_unfurlables = True
            num_lines_spliced_in += 1

        var_name_to_use = line_to_splice_in["variable"].replace("$", "d")
        operator_to_use = "+= ' <br> ' +" if (line_to_splice_in["in_for_loop"] and line_to_splice_in["variable"] in vars_to_unfurl) else "="
        modified_lines.insert(line_to_splice_in["line"] + num_lines_spliced_in, """
            // console.log('""" + line_to_splice_in["variable"] + """', """ + line_to_splice_in["variable"] + """);
            if (JSON.stringify(`${""" + line_to_splice_in["variable"] + """}`).includes("object") && """ + line_to_splice_in["variable"] + """[0]) {
                $('#""" + var_name_to_use + """')[0].innerHTML """ + operator_to_use + """ `${h2t(addNewlines(""" + line_to_splice_in["variable"] + """[0].outerHTML))}`;
            }
            else {
                if (""" + line_to_splice_in["variable"] + """ && """ + line_to_splice_in["variable"] + """.selector) {
                    $('#""" + var_name_to_use + """')[0].innerHTML """ + operator_to_use + """ `${""" + line_to_splice_in["variable"] + """.selector} (we output the selector when length is 0)`;
                }
                else if (""" + line_to_splice_in["variable"] + """ && """ + line_to_splice_in["variable"] + """.originalEvent) {
                    $('#""" + var_name_to_use + """')[0].innerHTML """ + operator_to_use + """ `${""" + line_to_splice_in["variable"] + """.type}`;
                }
                else if (typeof(""" + line_to_splice_in["variable"] + """) == 'object') {
                    try {
                        $('#""" + var_name_to_use + """')[0].innerHTML """ + operator_to_use + """ JSON.stringify(""" + line_to_splice_in["variable"] + """);
                    }
                    catch {
                        $('#""" + var_name_to_use + """')[0].innerHTML """ + operator_to_use + """ `${""" + line_to_splice_in["variable"] + """}`;
                    }
                }
                else {
                    $('#""" + var_name_to_use + """')[0].innerHTML """ + operator_to_use + """ `${""" + line_to_splice_in["variable"] + """}`;
                }
            }
        """)
        num_lines_spliced_in += 1
    modified_src_code = "\n".join(modified_lines)
    print("modified_src_code:", modified_src_code)
    return modified_src_code

def get_var_html(vars_to_track):
    html_of_vars = ""
    for var_to_display in vars_to_track:
        var_to_display_fixed = var_to_display.replace("$", "d")
        ha_button = "<HAButton id=\"dimage_button\"/>" if "d" == var_to_display[0] else "" # if a DOM element
        html_of_vars += ha_button + "<p id='" + var_to_display_fixed + "_p'>" + var_to_display + " = " + "<span className =\"pt\" id='" + var_to_display_fixed + "'> </span>" + " </p>\n"
    return html_of_vars

i = 0
vars_to_track_of_all_ex = []
for ex in ordering:
    print("===Writing ex:", str(i), "===")
    vars_to_track = [ex['domObj']] if (ex['domObj'] and ex['domObj'] not in vars_to_skip) else []
    vars_to_track_of_all_ex.append([1] if (ex['domObj'] and ex['domObj'] not in vars_to_skip) else [0]) # store whether first var is a DOM obj
    for oe in ex['otherElemsIncluded']:
        if oe not in vars_to_track and oe not in vars_to_skip:
            vars_to_track.append(oe)
    for v in ex['variables']:
        if v not in vars_to_track and v not in vars_to_skip:
            vars_to_track.append(v)
    print("ex ", i, vars_to_track)
    if len(vars_to_track) < 1: continue
    
    vars_to_track_of_all_ex[-1] += vars_to_track
    relationship_vars = []
    if len(vars_to_track_of_all_ex) > 1:
        if vars_to_track_of_all_ex[-2][0]: # last exercise is about a DOM element, so compare it with this exercises' variables
            relationship_vars.append(vars_to_track_of_all_ex[-2][1])
        # last exercise is not about a DOM element, so let's just compare all the variables of this and the last exercise
        relationship_vars = vars_to_track_of_all_ex[-2][1:] + vars_to_track_of_all_ex[-1][1:]
    else:
        relationship_vars = vars_to_track_of_all_ex[-1][1:] # it is the first exercise, so just compare this exercise's variables

    lines_to_splice_in = [] # reset lines to splice in
    # pprint.pprint(ex)

    # determine code to show
    code_to_show = ex["code"] if isinstance(ex["code"], str) else '\n'.join(ex["code"])
    # remove 1st and last 2 lines
    code_to_show = "\n".join(code_to_show.split("\n")[1:-2])

    eg = open("../scaffolded-exercises-interface/src/pages/auto-exercise" + str(i) + ".js", "w+") # path to SEI
    eg.write("""import React from 'react';
import { useState } from 'react';
import './../App.css';
import $ from 'jquery';
window.$ = $;

const selectors = {};

function addNewlines(str, variable_name) {
    // this runs every time a DOM element is shown as a variable on the page, so we should update the selectors at this stage
    // we do it by classes for now
    let class_loc = str.indexOf('class="') + 'class="'.length;
    let end_class_loc = str.substring(class_loc).indexOf('"');
    let class_name = str.substring(class_loc, class_loc + end_class_loc);
    console.log("in addNewLines class_name:", class_name);
    if (selectors[variable_name]) {
        selectors[variable_name].push(class_name);
    }
    else {
        selectors[variable_name] = [];
    }

    var result = '';
    while (str.length > 0) {
        result += str.substring(0, 80) + '\\n';
        str = str.substring(80);
    }
    let dotdotdot = "...";
    if (result.length < 150) 
        dotdotdot = " ";
    return result.substring(0,150) + dotdotdot;
}

function h2t(src) { // html to text
    return src.replaceAll("<", "&lt;").replaceAll(">", "&gt;"); //.replace("&", " &amp; "); 
}

function HAButton(props) {
    const [toggle, setToggle] = useState(true);
  
    function handleClick() {
        console.log("in handleClick", toggle, props.id);
        let element_to_a_h = props.id.split("_")[0];
        console.log(element_to_a_h);
        setToggle(!toggle);
    }

    function buttonText(t) {
        if (t) return "Annotate / Highlight";
        else return "Unannotate / Unhighlight";
    }
    
    return (
      <button onClick={handleClick}>
          {buttonText(toggle)}
      </button>
    );
}

export default class ExerciseAG""" + str(i) + """ extends React.Component {

    componentDidMount() {
        """ + modify_js_to_track_vars(src_to_use, vars_to_track) + """
    }

    render() {
        let codeToShow = '""" + json.dumps(code_to_show) + """'
        codeToShow = codeToShow.substring(1, codeToShow.length - 2)
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
                        <pre>{codeToShow}</pre>
                        <p>What is happening in the code?</p>
                        <textarea className="reflection-textarea" rows="6"></textarea>
                        <p>What is the relationship between the following variables: """ + ', '.join(list(set(relationship_vars))) + """? """ + ("(Give the meaning of the variable if there is only one.)" if len(relationship_vars) < 2 else "") + """</p>
                        <textarea className="reflection-textarea" rows="6"></textarea>
                    </div>
                    <a href='/exercise-auto""" + str(i + 1) + """'>Next Exercise</a>
                </div>
            </div>
        )
    }
}
    """)
    eg.close()
    i += 1

# print(esprima.parseScript(xkcd_js_src, options={'loc': True}))
