const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const uglify = require('uglifyjs-webpack-plugin');
var config = {
    entry: {
        entry: './src/entry.js',
        entry2: './src/entry2.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpg|gif)/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 500000
                }
            }]
        }]
    },
    plugins: [
        new HTMLWebpackPlugin({
            minify: {
                removeAttributeQuotes: true,
            },
            hash: true,
            template: 'src/index.html',
        }),
        new uglify(),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        compress: true,
        port: 9090
    }
}
module.exports = config;