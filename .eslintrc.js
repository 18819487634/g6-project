module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    globals: {
        _: false,
        mapActions: false,
        mapGetters: false,
        mapMutations: false,
        mapState: false
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'arrow-parens': 0,
        'no-useless-return': 0,
        'indent': [2, 4],
        'no-unused-vars': [0, {'vars': 'all', 'args': 'after-used'}],
        'no-multiple-empty-lines': [1, {'max': 2}],
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                mocha: true
            }
        }
    ]
  }
  