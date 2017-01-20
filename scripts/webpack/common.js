import path from 'path';
import { optimize, DefinePlugin, LoaderOptionsPlugin } from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { postcssProcessors } from '../lib/css';

const babelrc = require('../../.babelrc.json');

const styleExtractPlugin = new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: false,
});

export const pluginOptions = {
    postcss: () => postcssProcessors,
};

export default {
    entry: {
        index: [
            './src/client',
        ],
    },
    output: {
        path: path.join(process.cwd(), 'dist'),
        publicPath: '/my/dist/',
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.json',
        ],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    ...babelrc,
                },
            },
            {
                test: /\.p?css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        'css-loader',
                        'postcss-loader',
                    ],
                }),
            },
        ],
    },
    plugins: [
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),

        styleExtractPlugin,

        new optimize.CommonsChunkPlugin({
            name: 'common',
            // minChunks: Infinity,
        }),

        new LoaderOptionsPlugin({
            options: pluginOptions,
        }),
    ],
};
