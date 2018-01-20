var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.sass/,
            //use: ExtractTextPlugin.extract(['style-loader', 'css-loader', 'sass-loader'])
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader'],
                publicPath: "/dist"
            })
        }],
        filename: 'index.bundle.js'
    },
    module: {
        rules: [{
                test: /\.pug$/,
                use: ['html-loader', 'pug-html-loader']
            },
            {
                test: /\.sass/,
                //use: ExtractTextPlugin.extract(['style-loader', 'css-loader', 'sass-loader'])
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: "/dist"
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            template: './src/index.pug'
        }),
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        })
    ]
}