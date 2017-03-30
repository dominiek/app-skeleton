
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    vendor: ['jquery', 'async', 'react', 'react-dom', 'react-router'],
    app: './src/main.jsx'
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: false
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [

      // JS/JSX React/ES6
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            'add-module-exports'
          ]
        }
      },

      // CSS
      {
        include: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },

      // Fonts
      {
        test: /\.woff/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },

      // SVG
      {
        test: /\.(eot|png|ttf|svg)/,
        loader: 'file-loader'
      }
    ]
  }
}
