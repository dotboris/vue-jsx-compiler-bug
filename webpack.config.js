const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: '.',
  context: path.join(__dirname, 'src'),
  output: {
    filename: 'bundle.js',
    chunkFilename: '[id].bundle.[contenthash].js',
    path: `${__dirname}/dist/`,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'babel-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devtool: 'source-map'
};
