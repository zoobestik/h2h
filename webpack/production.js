import { optimize } from 'webpack';
import csso from 'postcss-csso';
import base from './common';

export default {
    ...base,

    plugins: [
        new optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                unsafe: true,
            },
            comments: false,
            sourceMap: false,
        }),
        new optimize.DedupePlugin(),
        new optimize.OccurenceOrderPlugin(),
    ].concat(base.plugins),

    postcss: (...args) => [ csso ].concat(base.postcss(...args)),
};
