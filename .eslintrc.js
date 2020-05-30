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
        "no-undef": 1
    }
};
