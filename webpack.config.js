const path = require('path');

module.exports = {
  entry: ['./src/widgets.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  target: ['web', 'es5'],
  mode: 'production',
};
