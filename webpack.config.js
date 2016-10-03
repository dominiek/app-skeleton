
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.jsx',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  module: {
    loaders: [

      // JS/JSX React/ES6
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
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
        loaders: ['style', 'css']
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
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
