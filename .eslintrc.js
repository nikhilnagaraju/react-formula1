module.exports = {
  extends: 'airbnb',
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  rules: {
    'function-paren-newline': ['error', 'consistent'],
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    }],
    'import/prefer-default-export': false,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './.webpack/webpack-config.js',
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
    },
  },
};
