/**
 * Created by Jared on 16/2/23.
 */
var path = require('path')
var rucksack = require('rucksack-css')
module.exports = {
    //devtool:'cheap-module-eval-source-map',
    //context: path.join(__dirname, './client'),
    entry: {
        app: path.join(__dirname,'client/index.js'),
        vendor: ['react'],

    },
    output: {
        path: path.join(__dirname, '/dist/static'),
        filename: '[name].js',
        publicPath:'/static/'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    //'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: [
                    'babel'
                ]
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    postcss: [
        rucksack({
            autoprefixer: true
        })
    ]
}