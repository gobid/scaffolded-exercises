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
xkcd_vars_to_unfurl = ["name", "tile", "$image"] # variables that appear in loops that should be unfurled
xkcd_html_arrays = ["$remove"] # DOM variables that are actual arrays of DOM elements
xkcd_dom_vars = ["$remove", "tile", "$image", "$map"]
xkcd_annotations_to_skip =[el.replace("$", "d") for el in []]
xkcd_annotations_to_show_by_tag = [el.replace("$", "d") for el in ["$image", "tile", "$remove"]]
xkcd_noannotations = [el.replace("$", "d") for el in ["$map", "position", "centre_last", "centre", "tilesize", "name", "e", "scroll_delta", "pos", "container_size"]]
xkcd_ex_to_skip = ["$overlay.css(", ]
xkcd_site = "https://xkcd.com/1110"
xkcd_vars_to_only_highlight = 'var v_t_o_h = ["scroll_delta", "pos", "position", "tilesize", "container_size", "dmap", "centre_last", "centre", "dremove", "name"];'

if EXAMPLE == "XKCD":
    src_to_use = xkcd_js_src
    html_to_use = xkcd_html
    vars_to_skip = xkcd_vars_to_skip
    vars_to_unfurl = xkcd_vars_to_unfurl
    dom_vars = xkcd_dom_vars
    annotations_to_skip = xkcd_annotations_to_skip
    annotations_to_show_by_tag = xkcd_annotations_to_show_by_tag
    noannotations = xkcd_noannotations
    site = xkcd_site
    vars_to_only_highlight = xkcd_vars_to_only_highlight # not annotate

fi = open("ordering.js")
ordering = json.loads(fi.read())
pprint.pprint(ordering)

# generate control exercise
all_variables = []
for o in ordering:
    all_variables += [o['domObj']] + o['otherElemsIncluded'] + o['variables']
all_variables = list(set(all_variables))
all_variables.remove(None)
control_ex = {
    'code': 
    """
    function eventPos(e) {
        if (e.type.match(/^touch/)) {
            e = e.originalEvent.changedTouches[0];
        }
        return {
            pageX: e.pageX,
            pageY: e.pageY
        };
    } // here is a comment

    var Map = function ($container) {
        $container.css({
            "z-index": 1,
            overflow: "hidden",
            width: "740px",
            height: "694px",
            margin: "0px auto 0",
            background: "#fff",
            position: "relative"
        }); /** another comment */

        var $overlay = $container.children("img");
        $overlay.css({
            background: "transparent",
            position: "relative"
        });

        var sign = function (x) {
            return x > 0 ? +1 : x < 0 ? -1 : 0;
        };
        var pow = function (x, y) {
            return Math.pow(Math.abs(x), y) * sign(x);
        };
        var clamp = function (x, min, max) {
            return Math.max(Math.min(x, max), min);
        };

        var offset = $container.offset();

        var padding_top = 200;
        var size = [14, 48, 25, 33];
        var tilesize = 2048;
        var visible = [];
        var container_size = [$container.width(), $container.height()];
        var scroll_delta = null;

        var $map = $container.children(".map");

        var map_size = [(size[1] + size[3]) * tilesize, (size[0] + size[2]) * tilesize];
        $map.css({
            width: map_size[0],
            height: map_size[1],
            position: "absolute",
            zIndex: -1
        });

        var position = [-(size[3] + 0.03) * tilesize, -(size[0] - 0.55) * tilesize];

        $map.find(".ground").css({
            top: size[0] * tilesize,
            height: size[2] * tilesize,
            position: "absolute",
            width: "100%",
            zIndex: -1,
            background: "#000"
        });

        var centre = [-1, 0];

        var update = function () {
            $map.css({
                left: position[0],
                top: position[1]
            });

            var centre_last = centre;
            centre = [Math.floor(-position[0] / tilesize), Math.floor(-position[1] / tilesize)];

            var tile_name = function (x, y) {
                x -= size[3];
                y -= size[0];
                return (y >= 0 ? y + 1 + "s" : -y + "n") + (x >= 0 ? x + 1 + "e" : -x + "w");
            };

            if (centre[0] != centre_last[0] || centre[1] != centre_last[1]) {
                var $remove = $map.children().not(".ground");

                for (var y = -1; y <= +1; y++) {
                    for (var x = -1; x <= +1; x++) {
                        var name = tile_name(centre[0] + x, centre[1] + y);
                        var tile = $map.find(".tile" + name);
                        if (tile.length) {
                            $remove = $remove.not(tile);
                        } else {
                            var $image = $(
                                "<img class=\"tile" +
                                    name +
                                    "\" src=\"http://imgs.xkcd.com/clickdrag/" +
                                    name +
                                    ".png\" style=\"top:" +
                                    (centre[1] + y) * tilesize +
                                    "px;left:" +
                                    (centre[0] + x) * tilesize +
                                    "px; z-index: -1; position: absolute;;\" style=\"display:none\" />"
                            );
                            $image
                                .load(function () {
                                    $(this).show();
                                })
                                .error(function () {
                                    $(this).remove();
                                });
                            $map.append($image);
                        }
                    }
                }

                $remove.remove();
            }
        };

        update();

        function drag(e) {
            if (scroll_delta) {
                var pos = eventPos(e);
                position[0] = Math.round(
                    clamp(pos.pageX + scroll_delta[0], -(size[1] + size[3]) * tilesize + container_size[0], 0)
                );
                position[1] = Math.round(
                    clamp(pos.pageY + scroll_delta[1], -(size[0] + size[2]) * tilesize + container_size[1], 0)
                );
                update();
            }
        }

        $container.on("mousedown touchstart", function (e) {
            if (e.button && e.button >= 2) {
                return;
            }
            var pos = eventPos(e);
            scroll_delta = [position[0] - pos.pageX, position[1] - pos.pageY];
            $(document).on(e.type == "mousedown" ? "mousemove" : "touchmove", drag);
            e.preventDefault();
        });
        $(document).on("mouseup touchend", function (e) {
            $(document).off("mousemove touchmove", drag);
            scroll_delta = null;
        });
    };

    /* 50:72:6f:50:75:6b:65:20:69:73:20:61:77:65:73:6f:6d:65 */

    $(function () {
        var map = new Map($("#comic"));
    });
    """
    ,
    'variables': all_variables,
    'reason': 'control',
    'domObj': None,
    'otherElemsIncluded': []
}
ordering.append(control_ex) # skip adding the control unless needed, need to split the codeToShow when regenerating control

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
        pass
        # print("t type: ", t.type)
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
                # print("need to track", t.expression.left.name, "at", t.expression.left.loc)
                lines_to_splice_in.append({"variable": t.expression.left.name, "line": t.expression.left.loc.end.line, "in_for_loop": in_for_loop})
        instrument(t.expression, vars_to_track)
    if hasattr(t, "declarations"): # variable declaration
        if t.declarations:
            for decl in t.declarations:
                if decl.id.name in vars_to_track:
                    # print("need to track", decl.id.name, decl.id.loc)
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
                    # print("need to track", t.callee.object.callee.name, t.callee.object.callee.loc)
                    lines_to_splice_in.append({"variable": t.callee.object.callee.name, "line": t.callee.object.callee.loc.end.line, "in_for_loop": in_for_loop})
                else:
                    if t.callee.object and t.callee.object.name in vars_to_track:
                        # print("need to track", t.callee.object.name, t.callee.object.loc)
                        lines_to_splice_in.append({"variable": t.callee.object.name, "line": t.callee.object.loc.end.line, "in_for_loop": in_for_loop})
    if hasattr(t, "left"):
        if t.left:
            if hasattr(t.left, "object"):
                if t.left.object and t.left.object.name in vars_to_track:
                    # print("need to track", t.left.object.name, t.left.object.loc)
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
    # print("outer_loop_location", outer_loop_location)
    added_reset_unfurlables = False
    t = esprima.parseScript(src_code, options={'loc': True})
    # print(t)
    # print("vars_to_track:", vars_to_track)
    instrument(t, vars_to_track)
    # print("lines_to_splice_in:")
    # pprint.pprint(lines_to_splice_in)
    src_code_lines = src_code.split("\n")
    modified_lines = src_code_lines.copy()
    num_lines_spliced_in = 0
    for li, line_to_splice_in in enumerate(lines_to_splice_in):
        if li + 1 < len(lines_to_splice_in) and lines_to_splice_in[li + 1]["line"] >= outer_loop_location and not added_reset_unfurlables: # the next line to splice in is going to be after the loop, so better reset unfurlables first
            # print("in unfurlables if")
            reset_unfurlables_js = ""
            for unfurlable in vars_to_unfurl:
                reset_unfurlables_js += "try { $('#" + unfurlable.replace("$", "d") + "')[0].innerHTML = ''; } catch { console.log('1 unfurlable not on this page.'); }"
            reset_selectors = ""
            for dom_var in dom_vars:
                reset_selectors += "selectors['" + dom_var.replace("$", "d") + "'] = [];"
            modified_lines.insert(outer_loop_location - 1 - 1 + num_lines_spliced_in, reset_unfurlables_js + reset_selectors) # -1 for index, -1 for going before first for loop
            added_reset_unfurlables = True
            num_lines_spliced_in += 1

        var_name_to_use = line_to_splice_in["variable"].replace("$", "d")
        operator_to_use = "+= ' <br> ' +" if (line_to_splice_in["in_for_loop"] and line_to_splice_in["variable"] in vars_to_unfurl) else "="

        def check_if_html_array(html_var):
            if html_var in xkcd_html_arrays:
                html_var = ('createHTMLArray(' + html_var + ')', '0')
            else:
                html_var = (html_var + "[0].outerHTML", '1')
            return html_var

        modified_lines.insert(line_to_splice_in["line"] + num_lines_spliced_in, """
            // console.log('""" + line_to_splice_in["variable"] + """', """ + line_to_splice_in["variable"] + """);
            // exclude annotations
            if (""" + line_to_splice_in["variable"] + """ && """ + line_to_splice_in["variable"] + """[0] && """ + line_to_splice_in["variable"] + """[0].outerHTML && """ + line_to_splice_in["variable"] + """[0].outerHTML.includes("annotation")) {
                console.log("it's annotation so skipping showing");
            }
            else {
                if (JSON.stringify(`${""" + line_to_splice_in["variable"] + """}`).includes("object") && """ + line_to_splice_in["variable"] + """[0]) {
                    $('#""" + var_name_to_use + """')[0].innerHTML """ + operator_to_use + """ `${h2t(addNewlines(""" + check_if_html_array(line_to_splice_in["variable"])[0] + """, '""" + var_name_to_use + """', """ + check_if_html_array(line_to_splice_in["variable"])[1] + """))}`;
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
            }
        """)
        num_lines_spliced_in += 1
    modified_src_code = "\n".join(modified_lines)
    # print("modified_src_code:", modified_src_code)
    return modified_src_code

def get_var_html(vars_to_track, reason):
    html_of_vars = ""
    for var_to_display in vars_to_track:
        # print("var_to_display:", var_to_display)
        var_to_display_fixed = var_to_display.replace("$", "d")
        var_notes_reflection = "<textarea className='reflection-textarea var-notes' rows='2' placeholder='(Optional) Your notes on this variable.' id='" + var_to_display_fixed + "_notes'></textarea>"
        ha_button = "<HAButton id=\"" + var_to_display_fixed + "_button\"/>" + var_notes_reflection if len(var_to_display) > 1 else var_notes_reflection # we can't do variable displays for one-letter variables
        # if (var_to_display in dom_vars and var_to_display_fixed not in annotations_to_skip) else "" # if a DOM element and not skippable
        print("reason", reason)
        if reason == "control":
            ha_button = ""
        print("ha_button:", ha_button)
        html_of_vars += "<p id='" + var_to_display_fixed + "_p'>" + var_to_display + " = " + "<span className =\"pt\" id='" + var_to_display_fixed + "'> </span>" + " </p>" + ha_button + "\n"
    return html_of_vars

def get_relationship_question(relationship_vars):
    relationship_vars = list(set(relationship_vars))
    print("relationship_vars:", relationship_vars)
    rq = ""
    if len(relationship_vars) < 2:
        rq = "What is the meaning / purpose of the variable " + ''.join(relationship_vars) + "?"
    else:
        rq = "What is the relationship between the following variables: " + ', '.join(relationship_vars) + "? "
    print("rq:", rq)
    return rq

def get_reflection_questions(relationship_vars, reason):
    if reason == "control":
        return """<div className="reflection-area">
                <pre id="codetoshow"></pre>
                <p>As you interact with the page, note what's happening to the variable values shown above. Note what is happening in the code, and how it shapes the visual output. Note the relationship between the various variables. <i>Hint: hover over the tool tips in the code. If you need more help, then feel free to use Chrome DevTools on this site as well: """ + site + """</i>. </p>
            </div>"""
    return """<div className="reflection-area">
                <p>As you interact with the page, what's happening to the variable values shown above?</p>
                <textarea id="visualreflect" className="reflection-textarea" rows="6"></textarea>
                <pre id="codetoshow"></pre>
                <p>What is happening in the code? How does it shape the visual output? <i>Hint: Use the buttons (annotate, highlight if present) and hover over the tool tips in the code.</i></p>
                <textarea id="codereflect" className="reflection-textarea" rows="6"></textarea>
                """ + ("""<p>""" + get_relationship_question(relationship_vars) + """</p>
                <textarea id="relationreflect" className="reflection-textarea" rows="6"></textarea>""" if len(relationship_vars) > 0 else "") + """
            </div>"""

i = 0
vars_to_track_of_all_ex = []
pairs_compared = []
singles_analyzed = []
print("ordering len", len(ordering))
for j, ex in enumerate(ordering):
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
    
    # collect relationships of variables across previous and current exercise
    vars_to_track_of_all_ex[-1] += vars_to_track
    relationship_vars = []
    if len(vars_to_track_of_all_ex) > 1:
        if vars_to_track_of_all_ex[-2][0]: # last exercise is about a DOM element, so compare it with this exercises' variables
            relationship_vars.append(vars_to_track_of_all_ex[-2][1])
        # last exercise is not about a DOM element, so let's just compare all the variables of this and the last exercise
        relationship_vars = vars_to_track_of_all_ex[-2][1:] + vars_to_track_of_all_ex[-1][1:]
    else:
        relationship_vars = vars_to_track_of_all_ex[-1][1:] # it is the first exercise, so just compare this exercise's variables
    relationship_vars = list(set(relationship_vars)) # make sure relationship_vars has no duplicates
    print("A) ex", i, "relationship_vars", relationship_vars)
    
    # get the current and previous exercise's code
    ex_code = "".join(ex["code"]) if type(ex["code"]) == list else ex["code"]
    skippable = False
    for skip_indicator in xkcd_ex_to_skip:
        if skip_indicator in ex_code and ex['reason'] != "control":
            print("Found", skip_indicator, "in ex", i, "so cancelling this exercise")
            skippable = True
            break # we skip this exercise
    if skippable: 
        continue
    ex_prev_code = (
        "".join(ordering[i-1]["code"]) 
        if type(ordering[i-1]["code"]) == list 
        else ordering[i-1]["code"]
    ) if i > 0 else ""

    # include only variables that are in the code
    relationship_vars_copy = relationship_vars.copy()
    for rv in relationship_vars_copy:
        # print("rv not in ex[code]", rv, ex_code, rv not in ex_code)
        if rv not in ex_code and i > 0 and rv not in ex_prev_code:
            if rv in relationship_vars:
                relationship_vars.remove(rv)
    print("B) ex", i, "relationship_vars", relationship_vars)
    
    # exclude variables already compared
    if len(relationship_vars) > 1: # skip the edge case of the first exercise of only one relationship_var 
        print("pairs_compared before:", pairs_compared)
        pairs_to_remain = []
        for rv in relationship_vars:
            for rv2 in relationship_vars:
                # no adding identical twins or repeat pairs
                if rv != rv2 and (rv, rv2) not in pairs_compared and (rv2, rv) not in pairs_compared:
                    pairs_to_remain.append((rv, rv2))
        for rv in relationship_vars:
            rv_in_p = False
            for p in pairs_to_remain:
                if rv in p:
                    rv_in_p = True
            if not rv_in_p:
                relationship_vars.remove(rv)

        pairs_compared += pairs_to_remain
        print("pairs_compared:", pairs_compared)
    
    # don't repeat singles, don't make list of comparables excessively long
    if len(relationship_vars) <= 1:
        print("singles_analyzed", singles_analyzed)
        if len(relationship_vars) > 0:
            if relationship_vars[0] in singles_analyzed:
                relationship_vars.remove(relationship_vars[0])
            else:
                singles_analyzed.append(relationship_vars[0])
    if len(relationship_vars) > 3: # remove singles
        for s in singles_analyzed:
            if s in relationship_vars:
                relationship_vars.remove(s)

    print("ex", i, "relationship_vars", relationship_vars)

    lines_to_splice_in = [] # reset lines to splice in
    # pprint.pprint(ex)

    # determine code to show
    code_to_show = ex["code"] if isinstance(ex["code"], str) else '\n'.join(ex["code"])
    # remove 1st and last 2 lines
    code_to_show = "\n".join(code_to_show.split("\n")[1:-2])
    # code_to_show_1 = code_to_show[0:len(code_to_show)/3]
    # code_to_show_2 = code_to_show[len(code_to_show)/3:len(code_to_show)*2/3]
    # code_to_show_3 = code_to_show[len(code_to_show)*2/3:len(code_to_show)] # split the code due to some js render

    eg = open("../scaffolded-exercises-interface/src/pages/auto-exercise" + str(i) + ".js", "w+") # path to SEI
    eg.write("""import React from 'react';
import { useState } from 'react';
import './../App.css';
import $ from 'jquery';
window.$ = $;

// store variable notes in exercises
$('textarea').on("change keyup paste", function(){
    console.log("text area has changed 2", $(this).val(), $(this).prop("id"), window.location.href.at(-1));
    localStorage.setItem($(this).prop("id") + "_ex" + window.location.href.at(-1), $(this).val());
})

const selectors = {};
const annotables = []; // keys are the specific annotations
const tutorons = {
    "left": "The left CSS property participates in specifying the horizontal placing of an element.",
    "top": "The top CSS property participates in specifying the vertical placing of an element.",
    "load": "Load data from the server and place the returned HTML into the matched elements.",
    "show()": "Display the matched elements.",
    "error": "Bind an event handler to the JavaScript event of a runtime err.",
    "remove()": "Remove the set of matched elements from the DOM.",
    "append": "Insert content, specified by the parameter, to the end of each element in the set of matched elements.",
    "Math.floor": "The static method always rounds down and returns the largest integer less than or equal to a given number.", // JS MDN site
    "children": "Returns a live HTMLCollection which contains all of the child elements of the element upon which it was called",
    "not": "A.not(B) returns all A elements that do not have the class name B",
    "find": "Returns the first element in the provided array that satisfies the provided testing function.",
    "height": "Specifies the height of an element.",
    "position": "Specifies the type of positioning method used for an element.", // W3
    "width": "Specifies the width of an element.",
    "zIndex": "Sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.",
    "Math.round": "Returns the value of a number rounded to the nearest integer"
};

""" + vars_to_only_highlight + """

$(document).on("ready", function(){
    // store variable notes in exercises
    $('textarea').on("change keyup paste", function(){
        // console.log("text area has changed 2", $(this).val(), $(this).prop("id"), window.location.href.at(-1));
        // console.log("going to set", $(this).prop("id") + "_ex" + window.location.href.at(-1), "to", $(this).val());
        localStorage.setItem($(this).prop("id") + "_ex" + window.location.href.at(-1), $(this).val());
    });
});

function createHTMLArray(html_array) {
    var html_array_str = '';
    var i = 0;
    for (var html_var of html_array) {
        html_array_str += html_var.outerHTML + ' and ';
        if (i > 3) {
            html_array_str += "many more.";
            break;
        }
        i++;
    }
    if (html_array_str.substr(-5) == ' and ')
        return html_array_str.substring(0, html_array_str.length - 5)
    else
        return html_array_str.substring(0, 500)
}

function getPrevNotes() {
    """ + 
    ("""var prev_notes = "<div style='position: fixed; left: 100px; width:700px; height:500px; overflow:scroll;'><u>Prior Notes</u><ul>";""" if j < len(ordering) - 1 else """var prev_notes = "<div style='position: fixed; left: 100px;'><ul>";""") + 
    """
    var prev_ex = parseInt(window.location.href.at(-1)) - 1;
    if (prev_ex == -1)
        prev_ex = 'v'
    if (prev_ex > -1 || prev_ex == 'v') {
        for (var i = 0; i < localStorage.length; i++){
            var k = localStorage.key(i);
            if (k.includes("_ex" + prev_ex)) {
                console.log("prev ex notes: ", localStorage.getItem(k));
                prev_notes += "<li style='text-align:left; margin:20px;'>" + k + ": " + localStorage.getItem(k) + " <br></li>";
            }
        }
    }
    prev_notes += "</ul></div>";
    return prev_notes;
}

function getTutoronifiedHTML(code) {
    code = code.replaceAll("<", "&lt;").replaceAll(">", "&gt;")
    for (const [key, value] of Object.entries(tutorons)) {
        var tutorons_html = "<span class='border-underline' title='" + value + "'>" + key + "</span>";
        code = code.replaceAll(key, tutorons_html);
    }
    return code;
}

function addNewlines(str, variable_name, perform=1) {
    if (perform) {
        // this runs every time a DOM element is shown as a variable on the page, so we should update the selectors at this stage
        // we do it by classes for now
        let class_loc = str.indexOf('class="') + 'class="'.length;
        let end_class_loc = str.substring(class_loc).indexOf('"');
        let class_name = str.substring(class_loc, class_loc + end_class_loc);
        // console.log("in addNewLines class_name:", class_name);
        if (selectors[variable_name]) {
            if (!selectors[variable_name].includes(class_name)) {
                selectors[variable_name].push(class_name);
            }
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
    else return str;
}

function h2t(src) { // html to text
    return src.replaceAll("<", "&lt;").replaceAll(">", "&gt;"); //.replace("&", " &amp; "); 
}

function splitByLastUnderscore(splittable) {
    var split_index = splittable.lastIndexOf("_");
    return splittable.substr(0, split_index);
}

function HAButton(props) {
    const [toggle, setToggle] = useState(true);
    const annotations_to_show_by_tag = [ '""" + "', '".join(annotations_to_show_by_tag) + """' ];
    const noannotations = [ '""" + "', '".join(noannotations) + """' ];
    
    function reAnnotate(){ // for reannotating when user behavior erases annotations
        let existing_annotations = document.getElementsByClassName("annotation");
        if (existing_annotations.length < 1) { // only reannotate if the annotations aren't already there
            for (var elem_to_annotate of annotables) {
                addAnnotation(elem_to_annotate);
            }
        }
    }

    function dollarifyVar(variable_from_exercise) {
        if (variable_from_exercise.substring(0,1) == 'd') // assumes variable can't start with a d
            return "$" + variable_from_exercise.substring(1);
        else
            return variable_from_exercise;
    }

    function addAnnotation(element) {
        // console.log("element", element, "props.id", props.id);
        let text_to_display = element.outerHTML; // .replaceAll("<", "&lt;").replaceAll(">", "&gt;") - not needed apparently
        var para = document.createElement("p");
        var variable_from_exercise = splitByLastUnderscore(props.id);
        variable_from_exercise = dollarifyVar(variable_from_exercise);
        var node = document.createTextNode(text_to_display);
        para.appendChild(node);
        para.style.top = element.style.top;
        para.style.left = element.style.left;
        para.style.margin = "20px";
        para.style.position = "absolute";
        para.classList.add("annotation");
        para.style.color = "gray";
        document.getElementsByClassName('map')[0].appendChild(para);
    }

    function addOrRemoveAnnotations(element) {
        if (toggle) {
            addAnnotation(element);
            // the annotation should also be retained upon user actions (mousemove / mousedown / mouseup / keyboard)
            annotables.push(element);
            $(document).on("mouseup keydown keyup", reAnnotate);
        }
        else {
            $(".annotation").remove();
            $(document).off("mouseup keydown keyup", reAnnotate);
        }
        // add element html at the corners of the html element
    }

    function markBorder(element) {
        // console.log("markBorder", element);
        if (element) {  
            if (toggle) {
                element.style.border = "5px solid black";
            }
            else {
                element.style.border = "0px solid black";
            }
        }
    }

    function annotateTag(tag) {
        // console.log("tag", tag);
        let tag_elems = document.getElementsByTagName(tag);
        // console.log("tag_elems", tag_elems);
        for (var tag_elem of tag_elems) {
            markBorder(tag_elem);
            addOrRemoveAnnotations(tag_elem);
        }
    }

    function annotate(variable, element) {
        // console.log("in annotate", variable, element, toggle);
        element = element[0];
        if (!element) return;
        if (annotations_to_show_by_tag.includes(variable)) {
            // console.log(variable, "in annotations_to_show_by_tag");
            let tag = element.tagName;
            annotateTag(tag);
            $("body").on("mouseup keydown keyup", function() {
                annotateTag(tag); // redo the annotation if in new territory
                if (!toggle) {
                    $("body").off();
                }
            });
        }
        else {   
            markBorder(element);
            addOrRemoveAnnotations(element);
        }
    }
    
    function highlightInCode(variable) {
        let codetoshow = document.getElementById("codetoshow");
        if (toggle) {
            let vartohighlight = dollarifyVar(variable);
            // console.log("vartohighlight: ", vartohighlight, "codetoshow", codetoshow);
            codetoshow.outerHTML = codetoshow.outerHTML.replaceAll(vartohighlight, "<mark>" + vartohighlight + "</mark>");
        }
        else {
            codetoshow.outerHTML = codetoshow.outerHTML.replaceAll("<mark>", "").replaceAll("</mark>", "");
        }
    }

    function handleClick() {
        // console.log("in handleClick", toggle, props.id);

        // remove all existing annotations to avoid confusion
        if (!toggle) {
            $(".annotation").remove();
            // enable all the highlight / annotate buttons on the page
            $(".habutton").prop("disabled", false);
        }
        
        let element_to_a_h = splitByLastUnderscore(props.id);
        if (!noannotations.includes(element_to_a_h)) {
            if (toggle) {
                alert("Done! Play around and check.");
                // disable all the highlight / annotate buttons on the page
                $(".habutton").prop("disabled", true);
                // except this one
                $("#" + props.id).prop("disabled", false);
            }
            // console.log("element_to_a_h", element_to_a_h);
            // console.log("selectors[", element_to_a_h, "]", selectors[element_to_a_h]);
            for (var selector of selectors[element_to_a_h]) {
                let element_to_a_h_html = document.getElementsByClassName(selector);
                // console.log("selector", selector, "element_to_a_h_html", element_to_a_h_html);
                annotate(element_to_a_h, element_to_a_h_html);
            }
        }
        else {
            if (toggle) {
                alert("Done! Play around and check.");
                // disable all the highlight / annotate buttons on the page
                $(".habutton").prop("disabled", true);
                // except this one
                $("#" + props.id).prop("disabled", false);
            }
        }
        highlightInCode(element_to_a_h);
        setToggle(!toggle);
    }

    function buttonText(t) {
        let codetoshow = '""" + json.dumps(code_to_show) + """';
        var needle_text = props.id.replace("_button","");
        var needle_text_short = needle_text.substr(1); // ignore the $ vs d case, all vars are strictly more than 1 character
        if (t) { 
            if (codetoshow.includes(needle_text_short)) { // highlights means something
                if (v_t_o_h.includes(needle_text)) return "Highlight in Code";
                else return "Highlight in Code / Annotate";
            }
            else {
                if (!v_t_o_h.includes(needle_text)) return "Annotate";
            }
        }
        else {
            if (v_t_o_h.includes(needle_text)) return "Unhighlight";
            else return "Unannotate / Unhighlight";
        }
        return null;
    }

    if (buttonText(toggle)) {
        return (
        <p><button className="habutton" id={props.id} onClick={handleClick}>
            {buttonText(toggle)}
        </button></p>
        );
        // dont need this anymore after disabling buttons:  Note un/redoing "annotate" can annotate new elements on the page. 
    }
    else return null;
}

export default class ExerciseAG""" + str(i) + """ extends React.Component {

    componentDidMount() {
        """ + modify_js_to_track_vars(src_to_use, vars_to_track) + """
        let codeToShow = '""" + json.dumps(code_to_show) + """'
        codeToShow = codeToShow.substring(1, codeToShow.length - 2);
        document.getElementById("codetoshow").innerHTML = getTutoronifiedHTML(codeToShow);
        var prevNotes = getPrevNotes();
        document.getElementById("prev_notes").innerHTML = getPrevNotes();
    }

    render() {
        
        return (
            <div className="App">
                <div id="app-title">Scaffolded Exercises</div>
                <br/><br/><br/>
                <p id="domelemslabel">DOM Elements:</p>
                """ + html_to_use + """
                <br/>
                <p id="prev_notes"></p>
                <div className="exercises">
                    Variables:
                    <br/>
                    """ + get_var_html(vars_to_track, ex['reason']) + """
                    <br/><br/>
                    Reflection Questions:
                    """ + get_reflection_questions(relationship_vars, ex['reason']) + """
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
