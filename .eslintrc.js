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
    'comma-dangle': [2, 'never']
  }
};
