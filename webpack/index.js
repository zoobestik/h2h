import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';

const styleExtractor = new ExtractTextPlugin('[name]');

export default {
    bail: true,
    cache: true,

    entry: {
        '/js/script.js': [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server',
            './www/client/main/index.js',
        ],
        '/css/style.css': [
            'webpack/hot/dev-server',
            './www/client/main/style.css',
        ],
    },
    output: {
        path: path.join(process.cwd(), 'dist'),
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
                loaders: [ 'react-hot', 'babel?cacheDirectory' ],
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
        return {
            defaults: [ autoprefixer, postcssNested ],
        };
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        styleExtractor,
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        hot: true,
        proxy: {
            '*': 'http://localhost:' + (process.env.PORT || 3000),
        },
    },
};
