import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';

const styleExtractor = new ExtractTextPlugin('[name].css');

export default {
    entry: {
        bundle: [
            './www/client/main/index.js',
        ],
    },
    output: {
        path: path.join(process.cwd(), 'dist'),
        publicPath: '/rs/',
        filename: '[name].js',
    },
    resolve: {
        root: path.resolve('./'),
        extensions: [ '', '.web.js', '.js', '.json', '.scss', '.css' ],
    },
    module: {
        loaders: [
            {
                react: true,
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [ 'babel?cacheDirectory' ],
            },
            {
                test: /\.s?css$/,
                loader: styleExtractor.extract('style',
                    'css?modules&importLoaders=1&localIdentName=[hash:base64:8]!postcss'
                ),
            },
            {
                test: /\.json$/,
                loaders: [ 'json-loader' ],
            },
        ],
    },
    postcss: () => ([
        autoprefixer,
        postcssNested,
    ]),
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
        }),
        styleExtractor,
    ],
};
