var path = require('path')

module.exports = {
  entry: './ui/main.jsx',
  output: {
    publicPath: '/js/',
    path: path.join(__dirname, 'public', 'js'),
    filename: 'bundle.js'
  },
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
