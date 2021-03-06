/**
 * Created by Jared on 16/2/23.
 */
var webpack = require('webpack');
var config = require('./webpack.config.base');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var SOURCE_MAP = true

config.devtool = SOURCE_MAP ? 'source-map' : false
config.output.filename = '[name].[chunkhash].js'
config.output.chunkFilename = '[id].[chunkhash].js'
//todo
//config.output.publicPath ='/dist/'
config.plugins = (config.plugins || []).concat([
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    }),

    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        }
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new HtmlWebpackPlugin({
        filename: '../index.html',
        template: './client/index.html',
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
        }
    })

])
module.exports =config
