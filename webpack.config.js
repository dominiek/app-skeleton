const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = process.argv.indexOf('-p') >= 0;
const ENV = isProduction ? 'production' : 'development';

const extractTextPlugin = new ExtractTextPlugin('styles.css');

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor-[hash].js',
  }),
  new webpack.DefinePlugin({
    ENV: JSON.stringify(ENV),
    PRODUCTION_HOSTNAME: JSON.stringify('production.com'),
    STAGING_HOSTNAME: JSON.stringify('staging.com'),
    'process.env': {
      // for react building https://facebook.github.io/react/docs/optimizing-performance.html#use-the-production-build
      NODE_ENV: JSON.stringify(ENV)
    }
  }),
  new HtmlWebpackPlugin({
    template: 'src/index.html'
  }),
  extractTextPlugin,
  new webpack.ProvidePlugin({

  })
];

const app = ['babel-polyfill', !isProduction && 'react-hot-loader/patch', './src/index'].filter(Boolean);

module.exports = {
  devtool: isProduction ? 'source-maps' : 'cheap-module-source-map',
  entry: {
    app
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },
  devServer: {
    inline: true,
    port: 4000,
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [
        !isProduction && 'react-hot-loader/webpack',
        'babel-loader',
        // !isProduction && 'eslint-loader'
      ].filter(Boolean),
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: extractTextPlugin.extract(['css-loader'])
    }, {
      test: /\.(eot|png|jpg|ttf|svg|gif)/,
      use: ['file-loader']
    }, {
      test: /\.woff/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff'
    }]
  },
  plugins
};