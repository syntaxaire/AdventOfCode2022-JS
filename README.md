# Advent of Code 2022 solutions

These are my solutions to Advent of Code 2022. This year I am branching out
and trying to learn JavaScript, so the puzzles are solved in... that.

# Steps I took to set up a JavaScript project

- Installed NodeJS and Yarn
- Initialize the git repository with `git init`
- Ran `yarn` in the project folder, which created `yarn.lock`, `.yarn-integrity`, and the `node_modules` directory.
- Added a stock NodeJS `.gitignore` template from https://github.com/github/gitignore
- Added `eslint` with `yarn add eslint`
- Ran `npx eslint *.js`, which prompted me to create a configuration file with 
`npm init @eslint/config`
    - Chose to use it "To check syntax, find problems, and enforce code style"
    - Chose the import style "JavaScript modules (import/export)"
    - Chose no framework with "None of these"
    - Said "No" to TypeScript
    - Chose "Node" for where my code will run
    - Chose "Use a popular style guide" and "Airbnb"
    - Chose "JSON" for config file format
    - Allowed it to install dependencies and chose "yarn" for dependency manager
    - This created a `package.json` and `.eslintrc.json` and allowed me to run `npx eslint *.js`
- Installed the eslint VS Code plugin to get corrections directly in the editor
- Set VS Code to not autodetect indentation, and set the indentation level to 2
- In order to allow console output while using Node, changed the empty 'rules' section in `.eslintrc.json` to:
```json
    "rules": {
        "no-console": 0
    }
```
- Set `"type": "module"` in `package.json` to allow ES `import`s to work
- Node would not import a module in the current directory with
```js
import { max, removeFrom, sum } from './common';
```
It does work nicely with
```js
import { max, removeFrom, sum } from './common.js';
```
but this is detected as an error by eslint. The fix for this turned out to be to add another rule to `.eslintrc.json`:
```json
    "rules": {
        "import/extensions": "always",
        "no-console": 0
    }
```
(Why should you have to change linter rules in order to import? Maybe we were not meant to know.)
