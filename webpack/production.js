import { optimize } from 'webpack';
import csso from 'postcss-csso';
import base from './common';

export default {
    ...base,

    plugins: [
        new optimize.UglifyJsPlugin({
            compressor: {
                pure_getters: true, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
                unsafe: true,
                unsafe_comps: true, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
                screw_ie8: true, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
                warnings: false,
            },
            comments: false,
            sourceMap: false,
        }),
        new optimize.DedupePlugin(),
        new optimize.OccurenceOrderPlugin(),
    ].concat(base.plugins),

    postcss: (...args) => [ csso ].concat(base.postcss(...args)),
};
