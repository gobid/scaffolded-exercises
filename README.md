# Scaffolded Exercises

## Local Variable Tracking / State Management

-   using abstract syntax trees (ASTs) to analyze / modify source code
    -   [explore an AST without downloading anything](https://astexplorer.net/)

#### `rewriteCode.js`

Deanonymizes functions so that we can create a model of the nested scope structure of the program. This is important for creating the state manager because we don't want two variables with the same named that are defined in different scopes to overwrite each others' values.

#### `createStateManager.js`

Creates state manager object and adds lines to the original source code in order to allow for state manager object updates in real-time.

---

### Future considerations / questions

-   how to handle ASTs for programs with multiple JS files?
