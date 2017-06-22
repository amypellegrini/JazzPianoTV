const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'jptv-main.js',
    path: path.resolve(__dirname, 'public/js')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("css-loader") }
    ]
  },
  plugins: [
      new ExtractTextPlugin('../css/jptv-main.css'),
    ]
};
