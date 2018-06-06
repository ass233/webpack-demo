const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
var config = {
    entry: './src/entry.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css/,
            include: [
                path.resolve(__dirname, 'src'),
            ],
            use: [
                'style-loader',
                'css-loader',
            ]
        }],
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: 'dist/index.html',
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        compress: true,
        port: 9090
    }
}
module.exports = config;