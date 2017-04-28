import { optimize } from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';
import CSSOCompressPlugin from 'csso-webpack-plugin';
import base from './common';

const { OccurrenceOrderPlugin, UglifyJsPlugin } = optimize;

export default {
    ...base,

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

        new CSSOCompressPlugin({ sourceMap: true }),
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
