import { optimize } from 'webpack';
import csso from 'postcss-csso';
import CompressionPlugin from 'compression-webpack-plugin';
import base, { pluginOptions } from './common';

const { OccurrenceOrderPlugin, UglifyJsPlugin } = optimize;
const { postcss } = pluginOptions;

pluginOptions.postcss = (...args) => [].concat(postcss(...args), csso);

export default {
    ...base,

    resolve: {
        ...base.resolve,
        alias: {
            react: 'preact-compat',
            'react-dom': 'preact-compat',
        },
    },

    plugins: [].concat(
        new UglifyJsPlugin({
            compressor: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true,
                warnings: false,
            },
            comments: false,
            sourceMap: false,
        }),

        new OccurrenceOrderPlugin(),

        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'zopfli',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        }),

        base.plugins,
    ),
};
