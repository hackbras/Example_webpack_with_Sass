var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        //path: './dist',
        filename: 'dist/index.bundle.js'
    },
    module: {
        rules: [
            { test: /\.scss/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),

        new ExtractTextPlugin({
            filename: 'style.css',
            disable: false,
            allChunks: true
        })
    ]
}