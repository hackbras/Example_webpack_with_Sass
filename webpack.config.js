var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: __dirname + '/dist',
//         filename: 'index.bundle.js'
//     },
//     plugins: [new HtmlWebpackPlugin()]
// }

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index.bundle.js'
    },
    // module: {
    //     rules: [{
    //             test: /\.sass/,
    //             use: ['style-loader', 'css-loader', 'sass-loader']
    //         },
    //         {
    //             test: /\.pug/,
    //             use: ExtractTextPlugin.extract({
    //                 fallbackloader: 'html-loader',
    //                 loader: ['pug-html-loader', 'pug-loader'],
    //                 publicPath: '/dist'
    //             })
    //         }
    //     ]
    // },
    plugins: [new HtmlWebpackPlugin()]

}