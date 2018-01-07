var HtmlWebpackPlugin = require('html-webpack-plugin');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index.bundle.js'
    },
    module: {
        rules: [{
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }]
            // ,{
            //     test: /\.pug/,
            //     use: ExtractTextPlugin.extract({
            //         fallbackloader: 'html-loader',
            //         loader: ['pug-html-loader', 'pug-loader'],
            //         publicPath: '/dist'
            //     })
            // }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/index.html'
        })
    ]
}