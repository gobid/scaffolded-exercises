const fs = require("fs");
const esprima = require("esprima");

const fileKey = "xkcd_src";
let scriptString = fs.readFileSync(`./updated_${fileKey}.js`).toString();

/* load in pre-created state manager, which already includes all variables and their scopes */
const stateManagerStr = fs.readFileSync(`./state_manager_${fileKey}.json`).toString();
let stateManager = JSON.parse(stateManagerStr); // TODO: use module exports instead of reading in JSON

/* load in pre-created scope list */
const scopelistStr = fs.readFileSync(`./scope_list_${fileKey}.json`).toString();
let scopeList = JSON.parse(scopelistStr);

/* map function names to stateManager keys. @TODO: need to track entire scopeChain if multiple functions have
same name in a program. */
let functionMappings = {}
for (let fxn of scopeList) {
	let scopeChainStr = fxn[0];
	let scopeChain = scopeChainStr.split(":");
	let fxnName = scopeChain[scopeChain.length - 1];
	/* @TODO: what if two functions have the same names in diff scopes in a file */
	if (functionMappings[fxnName]) {
		console.log(`FUNCTION MAPPING ERROR: Function ${fxnName} exists in multiple scopes`);
	} else {
		functionMappings[fxnName] = scopeChainStr;
	}
};

function addStateManagerUpdates(source) {
	let prevUpdated, updatedSrc = source;
	let isTraveralComplete = false;
	/* parseTreeAndUpdate makes one change at a time since it shifts around the locations/features of different items in the source code, so need to call it iteratively until all changes are made */
	while (!isTraveralComplete) {
		prevUpdated = updatedSrc;
		updatedSrc = parseTreeAndUpdate(updatedSrc);
		isTraveralComplete = (prevUpdated === updatedSrc) ? true : false;
	}
	return updatedSrc;
}

let updatedSource = addStateManagerUpdates(scriptString);
/* Create state manager in source */
let finalSource = "let stateManager = " + stateManagerStr + "\n" + updatedSource;
console.log(finalSource);

function parseTreeAndUpdate(source) {
    /* make one update then stop so that the next update is made on the newly updated tree. Inefficicent but consistent. */
	let updates = false;
	let mostRecentScope = "Program";

	/* ESPrima searches depth-first and since we already know all the variables in a given scope, once we have seen all the variables in that scope we know we are "leaving" that scope */
    esprima.parseScript(source, {}, function (node, meta) {
		if (!updates) {			
			/* initialized the scopeChain to include the global "Program" state, so don't add it twice */
			if (createsNewScope(node) && node.type !== "Program") {
				mostRecentScope = node.id.name;
			}
			if (isVariableUpdate(node) && !isUpdateAdded(source, meta.end.offset)) {
				let endLoc = meta.end.offset;

				/* find var in state manager */
				let stateManagerKey = functionMappings[mostRecentScope];
				let nodeName = getVarName(node);
				/* add code in src to update the state manager */
				// @TODO: get the right value for the update string
				const updateStr = `\n/* autogen added */ \nstateManager["${stateManagerKey}:${nodeName}"] = ${nodeName}\n`

				source = source.slice(0, endLoc + 1) + updateStr + source.slice(endLoc + 1);
				updates = true;
				// @TODO udpate current scope to start with that the next time we traverse?
			};
		}
    })
    return source;
}

function isVariableUpdate(node) {
	/* if it's a state manager update, return false */
	if (node.left !== undefined) {
		if (node.left.object !== undefined && node.left.object.name === "stateManager") {
			return false;
		}
	}
	return ((node.type === "ExpressionStatement"
		&& node.expression.type === "AssignmentExpression") ||
		// && stateManager.has(`${varScopeName}${node.expression.left.name}`)) ||
		// (node.type === "AssignmentExpression") || // @TODO: diff between expression and assignment
			// && stateManager.has(`${varScopeName}${node.left.name}`)) ||
		(node.type === "VariableDeclarator") || // @TODO: does this get for statement variable declarations? 
		(node.type === "ForStatement"
			&& node.init.type === "VariableDeclaration"))
			// && stateManager.has(`${varScopeName}${node.init.declarations[0].id.name}`)));
}

function isUpdateAdded(source, loc) {
	if (source.slice(loc, loc+20).includes("autogen added")) return true;
	else return false;
}

// @TODO: make a shared helpers module for these utility fxns
function createsNewScope(node) {
	return node.type === "FunctionDeclaration" ||
		isAnonymizedFunction(node) ||
		node.type === "Program";
}

function isAnonymizedFunction(node) {
	return (node.type === "VariableDeclarator"
		&& node.init.type === "FunctionExpression")
		|| (node.type === "ExpressionStatement"
			&& node.expression === "AssignmentExpression"
			&& node.expression.right === "FunctionExpression");
}

function getVarName(node) {
	let varName = null;

	switch(node.type) {
		case "AssignmentExpression":
			varName = node.left.name;
			break;
		case "VariableDeclarator":
			varName = node.id.name;
			break;
		default:
			varName = `DIDN'T CATCH CASE for type ${node.type}`;
	}
	return varName;
}

function getAssignmentValue(assignment, nodeType) {
	let varVal = null;

	switch (nodeType) {
		case "ArrayExpression":
			varVal = assignment.elements;
			// varVal = varVal.map(obj => obj.value); // for literals
			break;
		case "Literal":
			varVal = assignment.value;
			break;
		case "Identifier":
			varVal = assignment.name; // @TODO: access value of identifier? or SM-scoped name
			break;
		case "CallExpression":
			varVal = "@TODO";
			spprint("getAssignmentValue", "CALL EXPR");
			break;
		case "UnaryExpression":
			varVal = assignment.argument.value;
			break;
		case "NewExpression":
			varVal = "@TODO";
			spprint("getAssignmentValue", "NEW EXPR");
			break;
		default:
			spprint("getAssignmentValue", `node val type ${nodeType} not handled`);
	}

	return varVal;
}