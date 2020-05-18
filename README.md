# Scaffolded Exercises

## Setup

```
git clone git@github.com:NUDelta/scaffolded-exercises.git
cd scaffolded-exercises
npm install
npm start
```

navigate to `[http://localhost:3000/1110/index.html](http://localhost:3000/1110/index.html)` to see an exact copy of an XKCD comic. Open developer tools to see more information about what's happening on the page.

## System Explanation

Scaffolded Exercises (SE) analyzes and instruments unminified source code to track variable values, order of execution, and types of code elements in order to create a series of sequenced exercises based on that source code.

### Local Variable Tracking

SE tracks the live-updating values of all variables in all scopes. It does so by creating an object we refer to going forward as a **state manager**. This so that a developer doesn't have to set a breakpoint in order to see the value of a variable.

#### `rewriteCode.js`

Deanonymizes named functions (ex: `var foo = function(x, y) { ... }` turns into `function foo(x, y) { ... }`) so that we can create a model of the nested scope structure of the program. This is important for creating the _state manager_ because we don't want two variables with the same name that are defined in different scopes to overwrite each other's values, so variables in the _state manager_ are given unique keys based on their scope (ex: a variable `bar` defined in function `foo` would be named `foo:bar` in the state manager).

-   using abstract syntax trees (ASTs) to analyze / modify source code
    -   [explore an AST without downloading anything](https://astexplorer.net/)

#### `createStateManager.js`

After the source code is modified by `rewriteCode.js` (see above^ for information on function deanonymization for scoping purposes), `createStateManager.js` creates the _state manager_ (`stateManager`) object and instruments over the modified source code in order to add in code that updates the `stateManager` object in real-time. This `stateManager` object is inputted at the top of the client-side JS file it modifies.

### WiP: Exercise Breakdown

-   using [Stacktrace](https://www.stacktracejs.com/#!/docs/stacktrace-js) to trace function calls
-   using abstract syntax trees for static code analysis to decide the amount of code to be included in a given exercise + which exercises to present earlier in the sequence (see [breakdown methodology explanation video](https://www.youtube.com/watch?v=frKHF048qSg) for more info)

---

## Future considerations / questions

-   how to handle ASTs for programs with multiple JS files?
