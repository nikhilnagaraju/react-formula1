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
    'import/prefer-default-export': false,
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    }],
    'max-len': [2, 120, 4],
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
