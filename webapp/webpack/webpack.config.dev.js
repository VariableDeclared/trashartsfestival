const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
  rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.css$/,
            use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                importLoaders: 1,
                modules: true,
                localIdentName: "[name]__[local]__[hash:base64:5]",
                }
            },
            ]
        },
        {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        }
    ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    },
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'eval'
};