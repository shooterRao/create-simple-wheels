module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: 'airbnb-base',
  rules: {
    'linebreak-style': 0,
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    'no-plusplus': 0,
    'comma-dangle': [2, 'never'],
    'arrow-parens': [2, 'as-needed'], // 箭头函数参数只有一个时无需加括号
    'no-return-assign': 0,
    'no-param-reassign': 0,
    'no-console': 0
  }
};
