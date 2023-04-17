# python3 ex_info_to_ex.py
import json
import pprint

# import examples' source
xkcd_js_src = open("temp/xkcd_src.js")

fi = open("ordering.js")
ordering = json.loads(fi.read())

# pprint.pprint(ordering)

for i, ex in enumerate(ordering):
    print("Writing ex:", str(i))
    # pprint.pprint(ex)
    eg = open("../scaffolded-exercises-interface/src/pages/auto-exercise" + str(i) + ".js", "w+") # path to SEI
    eg.write("""import React from 'react';
import './../App.css';
import $ from 'jquery';
window.$ = $;

export default class ExerciseAG""" + str(i) + """ extends React.Component {
    componentDidMount() {
        """ + xkcd_js_src + """
    }
}
    """)
    eg.close()
