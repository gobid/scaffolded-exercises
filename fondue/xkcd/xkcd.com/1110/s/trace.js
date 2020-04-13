 /**
  * inView 1.5
  * @author Mattias Johansson
  * @copyright Mattias Johansson
  * License http://opensource.org/licenses/MIT
  *
  * Monitor a variable's value on screen. Useful when monitoring values that updates frequently like mouse position, scroll top etc.
  * https://github.com/arpo/trace.js
  */

function trace(label, value, opt) {

	var manageLabel,
	 	removeForbiddenChars,
		bgColorOpt = '',
		tabbify;

	if (typeof(label) === 'object') {
		opt = label;
		label = '';
	}

	removeForbiddenChars = function (val) {
		val = val.toLowerCase();
		val = val.replace(/[^a-zA-Z 0-9]+/g, '');
		val = val.replace(/^\s+|\s+$/gm, '');
		return val;
	};

	manageLabel = function (label) {

		label = label.split(' ').join('_');
		label = removeForbiddenChars(label);
		return label;

	};

	tabbify = function (str) {
		str = str.split(' ').join('&nbsp;');
		str = str.split('\n').join('<br>');
		return str;
	};


	if (typeof(opt) === 'number') {

		if (opt === 1) {
			opt = {
				color: '#94fbfe',  //Default #000
				backgroundColor: '#1b1a36', //Default #eee
				lineColor: '#2a2945' //Default #7ACEF5
			};
		}

		if (opt === 2) {
			opt = {
				color: '#a4ee52',  //Default #000
				backgroundColor: '#28351d', //Default #eee
				lineColor: '#334722' //Default #7ACEF5
			};
		}

		if (opt === 3) {
			opt = {
				color: '#5f5f5f',  //Default #000
				backgroundColor: '#d6d6d6', //Default #eee
				lineColor: '#cbcbcb', //Default #7ACEF5
				shadow: '3px 2px 3px rgba(0, 0, 0, 0.3)'
			};
		}

		if (opt === 4) {
			opt = {
				color: '#000000',  //Default #000
				backgroundColor: '#ffff00', //Default #eee
				lineColor: '#aaaa00', //Default #7ACEF5
				shadow: 'auto'
			};
		}

	} else
		if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(opt)) {
		bgColorOpt = opt;
	}

	opt = opt || window.traceOpt || {};

	var position = {
		tr: 'right: ' + (opt.margin || 10) + 'px; top: ' + (opt.margin || 10) + 'px; ',
		br: 'right: ' + (opt.margin || 10) + 'px; bottom: ' + (opt.margin || 10) + 'px; ',
		tl: 'left: ' + (opt.margin || 10) + 'px; top: ' + (opt.margin || 10) + 'px; ',
		bl: 'left: ' + (opt.margin || 10) + 'px; bottom: ' + (opt.margin || 10) + 'px; '
	};

	if (!window.traceOpt) {

		window.traceOpt = opt;
		window.traceOpt.outs = {};
		window.traceOpt.position = opt.position || 'tr';
		window.traceOpt.margin = opt.margin || 10;

	}

	var code =	'<div id="traceOutContainer" style="' +
				position[window.traceOpt.position] +
				'	text-align: left; ' +
				'	z-index: ' + (opt.zIndex || 9999) + '; ' +
				'	position: fixed; ' +
				'	width: ' + (opt.width || 280) + 'px; ' +
				'	opacity: ' + (opt.opacity || 1) + '; ' +
				'	padding: ' + (opt.padding || 0) + 'px; ' +
				'	font-family: sans-serif;' +
				'	font-size: ' + (opt.fontSize || 12) + 'px; ' +
				'	color: ' + (opt.color || '#000') + ';' +
				'	background-color: ' + (opt.backgroundColor || '#eee') + ';' +
				'	-moz-box-shadow: ' + (opt.shadow || '1px 1px 10px rgba(0, 0, 0, 0.3)') + ';' +
				'	-webkit-box-shadow: ' + (opt.shadow || '1px 1px 10px rgba(0, 0, 0, 0.3)') + ';' +
				'	-ms-box-shadow: ' + (opt.shadow || '1px 1px 10px rgba(0, 0, 0, 0.3)') + ';' +
				'	-0-box-shadow: ' + (opt.shadow || '1px 1px 10px rgba(0, 0, 0, 0.3)') + ';' +
				'	box-shadow: ' + (opt.shadow || '1px 1px 10px rgba(0, 0, 0, 0.3)') + ';' +
				'"></div>';

	if (!window.traceOpt.container) {

		window.traceOpt.container = document.createElement("DIV");
		window.traceOpt.container.innerHTML = code;
		document.body.appendChild(window.traceOpt.container);
		window.traceOpt.container = document.getElementById('traceOutContainer');
	}

	if (label === '_off') {
		window.traceOpt.off = true;
		document.getElementById('traceOutContainer').style.display = 'none';
		return;
	}

	if (label === '_on') {
		window.traceOpt.off = false;
		document.getElementById('traceOutContainer').style.display = 'block';
		return;
	}

	if (window.traceOpt.off) return;

	var propName = manageLabel(label),
		outStr = label,
		outputValue = value,
		currOut;

	if (typeof(outputValue) === 'undefined') {
		outputValue = '<i>undefined</i>';
	} else if (value instanceof Array) {
		outputValue = '<br>[';
		for (var i = 0; i < value.length; i++) {
			outputValue += value[i];
			if (i < value.length - 1) {
				outputValue += ', ';
			}
		}
		outputValue += ']';
	} else if (value !== null && (typeof value === 'object' || typeof value === 'function')){
		outputValue = '<br>' + tabbify(JSON.stringify(value, null, 4));
	}

	outStr = '<b>' + label + ':</b> <span>' + outputValue + '</span>';
	currOut = window.traceOpt.outs[propName];

	var rowCode = '<div style="' +
		'padding: 7px 10px;' +
		'background-color: ' + bgColorOpt + ';' +
		'border-bottom: 1px solid ' + (opt.lineColor || '#7ACEF5') + ';' +
		'margin-bottom: 0px;"' +
	'id="traceOutContainer_' + propName + '">' + outStr + '</div>';

	if (label) {

		if (!currOut) {
			var newDiv = document.createElement("DIV");
			newDiv.innerHTML = rowCode;
			window.traceOpt.container.appendChild(newDiv);
			if (typeof(outputValue) !==  'undefined')  window.traceOpt.outs[propName] = document.getElementById('traceOutContainer_' + propName);


		} else {
			window.traceOpt.outs[propName].innerHTML = outStr;
		}
	}

}

// module.exports = {
// 	'trace': trace(label, value, opt)
// }