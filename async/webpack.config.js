const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  plugin: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },
  devServer: {
    post: 3000,
    hot: true,
  },
};