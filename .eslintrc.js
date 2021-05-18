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
        "no-const-assign": 2, // 禁止修改const声明的变量
        "no-constant-condition": 2, // 禁止在条件中使用常量表达式 if(true) if(1)
        "no-dupe-keys": 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
        "no-dupe-args": 2, // 函数参数不能重复
        "no-duplicate-case": 2, // switch中的case标签不能重复
        "no-multiple-empty-lines": [1, {"max": 2}], // 空行最多不能超过2行
        "no-nested-ternary": 2, // 禁止使用嵌套的三元运算
        "no-return-assign": 1, // return 语句中不能有赋值表达式
        "no-var": 2, // 禁用var，用let和const代替
        "camelcase": 2, // 强制驼峰法命名
        "comma-dangle": [2, "never"], // 对象字面量项尾不能有逗号
        "consistent-this": [2, "that"], // this别名
        "eqeqeq": 2, // 必须使用全等
        "space-infix-ops": 2, // 中缀操作符周围要不要有空格
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
  