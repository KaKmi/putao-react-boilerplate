var webpack = require('webpack');
var config = require('./webpack.config.base');
var HtmlWebpackPlugin = require('html-webpack-plugin')
config.devtool ='eval-source-map'

var polyfill ='eventsource-polyfill'
var devClient ='webpack-hot-middleware/client'
Object.keys(config.entry).forEach(function (name,i) {
    var extras =i ===0 ?[polyfill,devClient]:[devClient]
    config.entry[name]=extras.concat(config.entry[name])
})
//todo
config.output.publicPath ='/'
config.plugins = (config.plugins || []).concat([
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'client/index.html',
        inject: true
    })
])
module.exports =config