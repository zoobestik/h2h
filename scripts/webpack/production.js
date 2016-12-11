import { optimize } from 'webpack';
import csso from 'postcss-csso';
import BabiliPlugin from 'babili-webpack-plugin';
import base from './common';

const { DedupePlugin, OccurenceOrderPlugin } = optimize;

export default {
    ...base,

    plugins: [].concat(
        [
            new BabiliPlugin(),
            new DedupePlugin(),
            new OccurenceOrderPlugin(),
        ],
        base.plugins
    ),

    postcss: (...args) => [].concat(base.postcss(...args), csso),
};
