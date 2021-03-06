const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'jptv-main.js',
    path: path.resolve(__dirname, 'public/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader",
            options: { url: false }
          }]
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=../fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/jptv-main.css'),
    new CopyWebpackPlugin([
      { from: 'src/templates/*.hjs', to: '../views/[name].hjs' },
      { from: 'src/pages/*.md', to: '../pages/[name].md' },
      { from: 'src/assets/favicon/*.*', to: '../[name].[ext]' },
      { from: 'src/assets/images/jptv-loading.gif', to: '../[name].[ext]' }
    ])
  ]
};
