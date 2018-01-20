var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
<<<<<<< HEAD
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
        }]
=======
        filename: 'index.bundle.js'
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
            }]
            // ,{
            //     test: /\.pug/,
            //     use: ExtractTextPlugin.extract({
            //         fallbackloader: 'html-loader',
            //         loader: ['pug-html-loader', 'pug-loader'],
            //         publicPath: '/dist'
            //     })
            // }
>>>>>>> 2046d150e90276a7c062d8017ebab57c0c69bfd6
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project Demo',
<<<<<<< HEAD
=======
            // minify: {
            //     collapseWhitespace: true
            // },
            // hash: true,
>>>>>>> 2046d150e90276a7c062d8017ebab57c0c69bfd6
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        })
    ]
}