# python3 ex_info_to_ex.py
import json
import pprint
import esprima # esprima==4.0.1

# import examples' source
xkcd_js_src = open("temp/xkcd_src.js").read()

fi = open("ordering.js")
ordering = json.loads(fi.read())
# pprint.pprint(ordering)
lines_to_splice_in = [] # global variable

def instrument(t, vars_to_track):
    if hasattr(t, "body"):
        print("t type: ", t.type, "going into body")
        instrument(t.body, vars_to_track)
    if isinstance(t, list):
        print("t is a list")
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
        instrument(t.expression, vars_to_track)
    if hasattr(t, "declarations"): # variable declaration
        if t.declarations:
            for decl in t.declarations:
                if decl.id.name in vars_to_track:
                    print("need to track", decl.id.name, decl.id.loc)
                if decl.init.type == "FunctionExpression":
                    instrument(decl.init, vars_to_track)
    if hasattr(t, "alternate"): # else statement
        if t.alternate:
            instrument(t.alternate, vars_to_track)
    if hasattr(t, "callee"): # obj.method() could modify object
        if hasattr(t.callee, "object"):
            if hasattr(t.callee.object, "callee"):
                if t.callee.object.callee.name in vars_to_track:
                    print("need to track", t.callee.object.callee.name, t.callee.object.callee.loc)
            else:
                if t.callee.object.name in vars_to_track:
                    print("need to track", t.callee.object.name, t.callee.object.loc)
    if hasattr(t, "left"):
        if t.left:
            if hasattr(t.left, "object"):
                if t.left.object.name in vars_to_track:
                    print("need to track", t.left.object.name)

def modify_js_to_track_vars(src_code, vars_to_track):
    t = esprima.parseScript(src_code, options={'loc': True})
    # print(t)
    print("vars_to_track:", vars_to_track)
    instrument(t, vars_to_track)

    return src_code

for i, ex in enumerate(ordering):
    print("Writing ex:", str(i))
    vars_to_track = [ex['domObj']] if ex['domObj'] else []
    for oe in ex['otherElemsIncluded']:
        vars_to_track.append(oe)
    for v in ex['variables']:
        vars_to_track.append(v)

    # pprint.pprint(ex)
    eg = open("../scaffolded-exercises-interface/src/pages/auto-exercise" + str(i) + ".js", "w+") # path to SEI
    eg.write("""import React from 'react';
import './../App.css';
import $ from 'jquery';
window.$ = $;

export default class ExerciseAG""" + str(i) + """ extends React.Component {
    componentDidMount() {
        """ + modify_js_to_track_vars(xkcd_js_src, vars_to_track) + """
    }
}
    """)
    eg.close()

print(esprima.parseScript(xkcd_js_src, options={'loc': True}))