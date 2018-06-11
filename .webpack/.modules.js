module.exports = {
  module: {
    rules: [
      // JSX and JavaScript loader
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Font loader, force < 51200 inline, to reduce flash of unstyled content
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 51200,
          },
        },
      },
      // TTF loader for older browsers, no inlining
      {
        test: /\.ttf$/,
        use: ['file-loader'],
      },
      // Image loader
      {
        test: /\.(jpg|png|svg|ico)$/,
        loader: 'file-loader',
      },
      // CSS loader, with scoping enabled
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true,
            },
          },
        ],
      },
      // SCSS loader, with scoping enabled
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};
