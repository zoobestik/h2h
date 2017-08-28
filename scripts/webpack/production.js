import { optimize } from 'webpack';
import CompressionPlugin from 'zopfli-webpack-plugin';
import CSSOCompressPlugin from 'csso-webpack-plugin';
import base from './common';

const { OccurrenceOrderPlugin, UglifyJsPlugin } = optimize;

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

        ...base.plugins,

        new UglifyJsPlugin({
            compressor: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true,
                warnings: false,
            },
            comments: false,
            sourceMap: true,
        }),

        new CSSOCompressPlugin(),

        new CompressionPlugin({
            algorithm: 'zopfli',
            test: /\.js$|\.css$|\.html$/,
        }),
    ],
};
