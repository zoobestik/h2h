import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { postcssProcessors } from '../lib/css';

const styleExtract = new ExtractTextPlugin('[name].css');

export default {
    entry: {
        index: [
            './src/index',
        ],
    },
    output: {
        path: path.join(process.cwd(), 'dist'),
        publicPath: '/bundles/',
        filename: '[name].js',
    },
    alias: {
        // app: path.join(process.cwd(), 'src'),
    },
    resolve: {
        root: path.resolve('./'),
        extensions: [
            '',
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
                loaders: [
                    'babel?cacheDirectory',
                ],
            },
            {
                test: /\.p?css$/,
                exclude: /node_modules/,
                loader: styleExtract.extract(
                    'style-loader',
                    [
                        'css-loader',
                        'postcss-loader',
                    ].join('!')
                ),
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        styleExtract,
    ],
    postcss: () => postcssProcessors,
};
