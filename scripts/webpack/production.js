import { optimize } from 'webpack';
import csso from 'postcss-csso';
import BabiliPlugin from 'babili-webpack-plugin';
import base, { pluginOptions } from './common';

const { OccurrenceOrderPlugin } = optimize;
const { postcss } = pluginOptions;

pluginOptions.postcss = (...args) => [].concat(postcss(...args), csso);

export default {
    ...base,

    plugins: [].concat(
        [
            new BabiliPlugin(),
            new OccurrenceOrderPlugin(),
        ],
        base.plugins,
    ),
};
