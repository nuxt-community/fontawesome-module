module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
        node: true,
        jest: true
    },
    extends: [
        'standard',
        'plugin:vue/recommended'
    ],
    plugins: [
        'jest',
        'vue'
    ],
    rules: {
        'indent': 'off',
        'vue/script-indent': ['warn', 2, {
            'baseIndent': 1
        }],
        // Allow paren-less arrow functions
        'arrow-parens': 0,
        // Allow async-await
        'generator-star-spacing': 0,
        // Do not allow console.logs etc...
        'no-console': 2
    },
    globals: {
        'jest/globals': true,
        jasmine: true
    }
}
