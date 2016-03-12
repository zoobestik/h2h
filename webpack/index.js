import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';

const styleExtractor = new ExtractTextPlugin('[name]');

module.exports = {
    entry: {
        '/js/script.js': [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server',
            './components/client/index.js',
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
        extensions: [ '', '.js' ],
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
                loader: styleExtractor.extract('style', 'css!postcss'),
            },
        ],
    },
    /**
     * Configure postcss plugins
     *
     * @returns {PostCSSPlugin[]}
     */
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
