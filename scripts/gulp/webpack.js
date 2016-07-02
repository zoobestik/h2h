import path from 'path';
import webpack from 'webpack';
import del from 'del';

const env = process.env.NODE_ENV;
const configDefaultPath = path.join(process.cwd(), 'scripts', 'webpack');

/**
 * Create new webpack instance
 *
 * @param {string} configPath – config path
 * @param {Object} [args] – overrided options
 *
 * @returns {webpack}
 */
const createWebPack = (configPath, args) => webpack({
    // eslint-disable-next-line global-require
    ...require(configPath)[env],
    ...(args || {}),
});

/**
 * Run webpack with parameters
 *
 * @see createWebPack
 *
 * @return {Promise} – webpack stats or error
 */
const execWebpack = (...args) =>
    new Promise((resolve, reject) => {
        createWebPack(...args)
            .run((err, stats) => {
                if (err) return reject(err);
                return resolve(stats);
            });
    });

/**
 * Print webpack stats with default params
 *
 * @param stats
 */
const printWebpackOutput = stats => {
    console.log(stats.toString({
        colors: true, // env !== 'production',
        chunks: false,
        chunkModules: false,
        hash: false,
        timings: false,
        version: false,
    }));
};

/**
 * Run webpack and print result
 *
 * @see createWebPack
 *
 * @see execWebpack
 */
const webpackRunTask = args =>
    execWebpack(configDefaultPath, args)
        .then(stats => {
            const { errors } = stats.toJson();

            printWebpackOutput(stats);

            if (errors.length > 0) {
                throw Error(errors.join('\n'));
            }
        });

/**
 * Webpack watcher task
 */
export const watch = () => {
    createWebPack(configDefaultPath)
        .watch({ aggregateTimeout: 300, poll: true }, (err, stats) => {
            if (err) {
                console.error(err);
                throw err;
            }

            printWebpackOutput(stats);
        });
};

/**
 * clean webpack artifacts
 */
export const clean = () => del([
    'dist',
]);

export default () => webpackRunTask();
