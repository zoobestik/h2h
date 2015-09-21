const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        '/js/script.js': [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server',
            './components/client/index.jsx',
        ],
        '/css/style.css': [
            'webpack/hot/dev-server',
            './components/client/style.css',
        ],
    },
    output: {
        path: path.join(process.cwd(), 'build'),
        publicPath: '/',
        filename: '[name]',
    },
    resolve: {
        root: path.resolve('./'),
        extensions: [ '', '.js', '.jsx' ],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [ 'react-hot', 'babel' ],
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
            },
        ],
    },
    postcss: function() {
        return [
            require('autoprefixer'),
            require('postcss-nested'),
        ];
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('[name]'),
    ],
    historyApiFallback: true,
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        hot: true,
        proxy: {
            '*': 'http://localhost:' + (process.env.PORT || 3000),
        },
    },
};
