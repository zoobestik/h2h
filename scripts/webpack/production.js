import { optimize } from 'webpack';
import CompressionPlugin from 'zopfli-webpack-plugin';
import CSSOCompressPlugin from 'csso-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import base from './common';

const { ModuleConcatenationPlugin, OccurrenceOrderPlugin } = optimize;

export default {
    ...base,

    resolve: {
        ...base.resolve,
        alias: {
            react: 'preact-compat',
            'react-dom': 'preact-compat',
            // 'create-react-class': `${process.cwd()}/src/lib/create-react-class`,
        },
    },

    plugins: [
        new OccurrenceOrderPlugin(),
        new ModuleConcatenationPlugin(),

        ...base.plugins,

        new UglifyJSPlugin({
            parallel: {
                cache: true,
                workers: 6,
            },
            sourceMap: true,
            uglifyOptions: {
                compressor: {
                    unsafe: true,
                    unsafe_comps: true,
                    unsafe_Func: true,
                    unsafe_math: true,
                    unsafe_regexp: true,
                    pure_getters: true,
                    drop_console: true,
                },
                ecma: 8,
                ie8: false,
                output: {
                    comments: false,
                },
            },
        }),

        new CSSOCompressPlugin(),

        new CompressionPlugin({
            algorithm: 'zopfli',
            test: /\.js$|\.css$|\.html$/,
        }),
    ],
};
