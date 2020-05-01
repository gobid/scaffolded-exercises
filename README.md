# Scaffolded Exercises

## Local Variable Tracking

-   using abstract syntax trees (ASTs) to analyze / modify source code
    -   [explore an AST without downloading anything](https://astexplorer.net/)

#### `rewriteCode.js`

Deanonymizes named functions (ex: `var foo = function(x, y) { ... }` turns into `function foo(x, y) { ... }`) so that we can create a model of the nested scope structure of the program. This is important for creating the state manager because we don't want two variables with the same name that are defined in different scopes to overwrite each other's values.

#### `createStateManager.js`

Creates the `stateManager` object and instruments over the source code (modified by `rewriteCode.js` to deanonymize named functions when possible) in order to allow for state manager object updates in real-time. This `stateManager` object is inputted at the top of the client-side JS file(s) it modifies.

## WiP: Exercise Breakdown

-   using [Stacktrace](https://www.stacktracejs.com/#!) to trace function calls
-   using abstract syntax trees for static code analysis to decide the amount of code to be included in a given exercise + which exercises to present earlier in the sequence (see [breakdown methodology explanation video](https://www.youtube.com/watch?v=frKHF048qSg) for more info)

#### Instrumented Code: `instrumented_sites/xkcd/xkcd.com/1110/main.js`

-   uninstrumented source code is at `./xkcd_src.js`

---

### Future considerations / questions

-   how to handle ASTs for programs with multiple JS files?
