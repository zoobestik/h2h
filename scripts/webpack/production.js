import { optimize } from 'webpack';
import csso from 'postcss-csso';
import base from './common';

const { DedupePlugin, OccurenceOrderPlugin, UglifyJsPlugin } = optimize;

export default {
    ...base,

    plugins: [].concat(
        [
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
            new DedupePlugin(),
            new OccurenceOrderPlugin(),
        ],
        base.plugins
    ),

    postcss: (...args) => [].concat(base.postcss(...args), csso),
};
