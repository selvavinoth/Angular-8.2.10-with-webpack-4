var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    output: {
        path: helpers.root('./dist'),
        publicPath: 'https://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ],
    devServer: {
        historyApiFallback: true,
        inline: true,
        stats: {colors: true},
        progress: true,
        contentBase: './dist',
        headers: {
            'Access-Control-Allow-Origin': ' https://localhost:5000'
        }
    }

});