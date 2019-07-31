module.exports = {
    extends: ['stylelint-prettier/recommended', 'stylelint-config-standard'],
    plugins: ['stylelint-scss'],
    rules: {
        // Adds support for SCSS @ rules
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,

        // Disables descending specificity rules
        'no-descending-specificity': null
    },
    syntax: 'scss'
};
