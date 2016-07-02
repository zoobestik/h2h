import fs from 'fs';
import { CLIEngine as ESLint } from 'eslint';
import del from 'del';

/**
 * Create eslint instance with config
 *
 * @param {Object} [args] – user options
 *
 * @returns {ESLint} – eslint instance
 */
const createESLint = args =>
    new ESLint({
        cache: true,
        cwd: process.cwd(),
        ignorePath: '.gitignore',
        extensions: [
            'js',
            'jsx',
        ],
        ...(args || {}),
    });

/**
 * Run ESLint for files
 *
 * @param options
 * @param [options.files] – list of files
 * @param [options.args] – eslint user options
 *
 * @returns {Promise} – result for checking
 */
const executeESLintFiles = ({ files, args }) =>
    createESLint(args)
        .executeOnFiles(Array.isArray(files) ? files : ['.']);

/**
 *
 * @param {ESLintOutput} out – result data
 *
 * @return {Promise} – result logged
 */
const printResult = out => new Promise((resolve, reject) => {
    const formatter = ESLint.getFormatter();
    const { errorCount, results } = out;

    console.log(
        formatter(results)
    );

    if (errorCount === 0) {
        return resolve();
    }

    return reject(new Error());
});

/**
 * Task for autofix errors
 *
 * @return {Promise}
 */
export const eslintFix = () => {
    const args = { fix: true };
    const out = executeESLintFiles({ args });

    const fixStreams = out.results
        .filter(file => Boolean(file.output))
        .map(({ filePath, output }) => new Promise(
            (resolve, reject) => fs.writeFile(filePath, output, err => (
                err ? reject(err) : resolve()
            ))
        ));

    return Promise.all(fixStreams)
        .then(() => printResult(out));
};

export const eslintClean = () => del([
    '.eslintcache',
]);

export default () => printResult(executeESLintFiles({}));
