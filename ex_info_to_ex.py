# python3 ex_info_to_ex.py
import json
import pprint
import esprima

# import examples' source
xkcd_js_src = open("temp/xkcd_src.js").read()

fi = open("ordering.js")
ordering = json.loads(fi.read())
# pprint.pprint(ordering)

def modify_js_to_track_vars(src_code, vars_to_track):
    t = esprima.parseScript(src_code)
    # print(t)
    


    return src_code

for i, ex in enumerate(ordering):
    print("Writing ex:", str(i))
    vars_to_track = [ex.domObj]
    for oe in ex.otherElemsIncluded:
        vars_to_track.push(oe)
    for v in ex.variables:
        vars_to_track.push(v)

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
