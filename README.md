# Scaffolded Exercises

## Setup

```
git clone git@github.com:NUDelta/scaffolded-exercises.git
cd scaffolded-exercises
npm install
npm start
```

navigate to `http://localhost:3000/xkcd.com/1110/index.html` to see an exact copy of an XKCD comic. Open developer tools to see more information about what's happening on the page.

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

This instrumentation also:

-   adds information into `logs/runLog.js`. The information in the runLog describes the order that things ran in and everytime a code snippet is run, it is added in the run log.
-   identifies which code/variables refer to DOM objects
-   counts the number of time each instrumented code snippet is run

In the instructions for "Using SE on a new site" below, step 4 instructs developers to add a button to the source code's HTML. When you click that button, the stateManager, runLog, dom object information, and the number of time each code snippet is run is all downloaded in preparation to be analyzed for exercise breakdown (below).

### Exercise Breakdown

SE recency information (created by instrumentation steps in `createStateManager.js`) and code classification (`user`, `modifier`, and `initializer` code types) to create an order of exercises.

### `identifyCodeClassification.js`

Re-instruments the code created by `rewriteCode.js` to include copies of DOM objects before and after code is run that includes the object. If the two copies are the same before and after a certain code snippet run, that snippet gets a `user` code classification. Otherwise, it gets a `modifier` classification.

### `findExerciseorder.js`

The final step to actually output the exercise order. Runs the algorithm described in [this video](https://www.youtube.com/watch?v=frKHF048qSg) to ouput a series of exercises based on a site's source code.

## Using SE on a new site

Logging the steps I took to get SE to run on XKCD and partially run on MapsTD (outstanding issue with MapsTD is Google Maps API key access, which introduces a larger question about how to run SE on sites that require API keys/have other external dependencies. I believe Gobi is working on running MapsTD for Isopleth now, so SE can adapt whatever approach he ends up taking). There are a number of hardcoded XKCD-specific directory paths that create new files in the right spots for XKCD specifically that would have to be changed to run SE on a new site. Next steps include generalizing these paths and/or creating a `config` template file for someone to recreate for every new site they want to run SE on. The rest of the system is generalized to work on any site.

1. Download entire site source code (including files). Did so by pressing `cmd-s` in Google Chrome and selecting the "Webpage, Complete" Format option. Save the download folder in the `sites` directory.
2. Find and open the `index.html` file in a browser. Open the developer console. You will likely see there are scripts/sources that are not being loaded due to the link structure in the HTML file's `src` tags. There are two options to fix this: first, you can add the appropriate paths that are correct given the new local file structure directly into the HTML file. More optimally/reliably, you can make a few updates in `sites/app.js` to load static files in differently and make the paths "look" the same as how they did on the live site. Read more about [serving static files in Express here](https://expressjs.com/en/starter/static-files.html).
3. No matter what, you do have to make at least one edit in `sites/app.js` to serve your HTML file. Add the following line to the top of the file (below the other `app` setup code), replacing "xkcd" with the name of the downloaded folder you added to the `sites` directory in step 1:

```
app.use(express.static(path.join(__dirname, "xkcd")));
```

You can optionally add a hyperlink in the `app.get("/", ..)` route response buffer that will lead you directly to your new site's homepage.

4. Add StackTrace CDN link to head of HTML file + download button to the top of the site's HTML body:

Within `<head></head>` tags:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/stacktrace.js/2.0.2/stacktrace.min.js" crossorigin="anonymous"></script>
```

Directly below the HTML `<body>` tag:

```
<button id="readytolearnbtn">Scaffolded Exercises: Click to create exercises from this site</button>
```

5. Run `npx eslint <file-or-folder-name> --fix` on source code to find and fix any possible syntax errors that will cause issues down the road (example: a single-line `if` statement without surrounding braces could be an issues if autogenerated code is added in that if statement). Running this command with `--fix` will fix most of the issues automatically, but you'll see output in your console for any remaining linting issues that weren't able to be automatically solved that you'll have to go fix yourself.
6. Run `node rewriteCode.js`, changing `fileKey` var to be the filename of the main JavaScript file for the site you're working on
7. Run `node createStateManager.js` changing `fileKey` var to be the filename of the main JavaScript file for the site you're working on
8. Run `npm start` and navigate to `http:localhost:3000/<newsite_index_file_path>/index.html` (based on changes made to `app.js` for the new site).
9. Interact with the site. You may notice that the site is a bit laggy due to the amount of instrumentation SE adds to the source code. That is okay. You'll have an opportunity to interact with a not-laggy version of the site shortly.
10. After interacting with the site for long enough that you see the full functionality of the site, press the purple button in the top left corner of your screen (you added this button in step 4). In the browser console where you're running the site, you'll see a message that says "data in directory: ######". Copy the sequence of numbers. This will be your `timestampKey` for the following step.
11. Run `node identifyCodeClassification.js`, changing `timestampKey` to the number you copied from your console above. This will generate a new file in `temp` called `second_instrumentation.js`, which is the second instrumentation of the source code.
12. Copy the contents of `second_instrumentation.js` to the main JavaScript file. Run `npm start` again.
13. Interact with the site for long enough that you see the full functionality of the site. Press the purple button in the top left corner of your screen (you added this button in step 4). In the browser console where you're running the site, you'll see a message that says "data in file: ./exercise-data/codetypeinfo-######.json". Copy the sequence of numbers for the following steps.
14. Run `node findExerciseOrder.js`. This will print out the exercise order.

## Future considerations / questions

-   how to handle ASTs for programs with multiple JS files?
