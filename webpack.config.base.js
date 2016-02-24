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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: [
                    'babel'
                ]
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'assets/[name].[ext]?[hash:7]'
                }
            }
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