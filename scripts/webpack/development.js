import { NoEmitOnErrorsPlugin } from 'webpack';
import base from './common';

export default {
    ...base,

    // devtool: 'eval-source-map',

    plugins: [].concat(
        new NoEmitOnErrorsPlugin(),
        base.plugins
    ),
};
