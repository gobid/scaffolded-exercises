module.exports = {
    env: {
        browser: true
    },
    extends: "eslint:recommended",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 11,
        sourceType: "module"
    },
    rules: {
        curly: 1,
        "no-unused-vars": 0,
        "no-undef": 1,
        "no-redeclare": 1,
        "no-unreachable": 1,
        "no-extra-semi": 1,
        "no-func-assign": 0 // func reassignment is necessary for stack traces
    }
};
