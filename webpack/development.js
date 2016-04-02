import { HotModuleReplacementPlugin, NoErrorsPlugin } from 'webpack';
import base from './common';

export default {
    ...base,

    bail: true,
    cache: true,

    devtool: 'cheap-module-eval-source-map',

    devServer: {
        hot: true,
        proxy: {
            '*': 'http://localhost:' + (process.env.PORT || 3000),
        },
    },

    plugins: [
        new HotModuleReplacementPlugin(),
        new NoErrorsPlugin(),
    ].concat(base.plugins),

    entry: Object.keys(base.entry).reduce((result, name) => {
        result[name] = [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server',
        ].concat(base.entry[name]);

        return result;
    }, {}),
};
