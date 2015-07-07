module.exports = {
  "rules": {

    //// possible errors (http://eslint.org/docs/rules/#possible-errors)

    "comma-dangle": [ 2, "never" ],
    "no-cond-assign": [ 2, "except-parens" ],

    /// best practices (http://eslint.org/docs/rules/#best-practices)

    "block-scoped-var": 2,
    "curly": [ 2, "all" ],
    "no-multi-spaces": [ 2, { "exceptions": { "VariableDeclarator": true, "ArrayExpression": true } } ],
    "dot-location": [ 2, "property" ],
    "guard-for-in": 2,
    "no-else-return": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-warning-comments": [ 1, { "terms": [ "todo", "fixme" ] } ],
    "radix": 2,

    /// strict mode (http://eslint.org/docs/rules/#strict-mode)

    "strict": 0,

    /// variables (http://eslint.org/docs/rules/#variables)

    "no-use-before-define": [ 2, "nofunc" ],

    /// node (http://eslint.org/docs/rules/#nodejs)

    "handle-callback-err": 2,
    "no-sync": 2,

    /// stylistic issues (http://eslint.org/docs/rules/#stylistic-issues)

    "brace-style": [ 2, "1tbs", { "allowSingleLine": true } ],
    "comma-style": [ 2, "last" ],
    "indent": [ 2, 2 ],
    "linebreak-style": [ 2, "unix" ],
    "no-lonely-if": 2,
    "object-curly-spacing": [ 2, "always" ], // may be high-impact - consider changing
    "quotes": [ 2, "single", "avoid-escape" ],
    "semi": [ 2, "always" ],
    "space-after-keywords": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": [ 2, { "anonymous": "always", "named": "never" } ],
    "no-bitwise": 2
  },
  "env": {
    "node": true
  }
};
