module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
