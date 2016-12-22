import stylelint from 'stylelint';
import { string as formatter } from 'stylelint/lib/formatters';
import { ignorePatternConfig } from '../../lib/ignore';
import { postcssProcessors as processors } from '../../lib/css';

/**
 * Task for css lints
 */
const stylesLint = () =>
    stylelint.lint({
        files: '**/*.pcss',
        ignorePath: ignorePatternConfig,
        processors,
    })
        .then(({ errored, results }) => {
            if (errored) {
                console.log(formatter(results));
                throw new Error();
            }
        });

// const stylesFix = () =>
//     postcss(
//         processors.concat(stylefmt())
//     )
//
//         .then(({ errored, results }) => {
//             if (errored) {
//                 console.log(formatter(results));
//                 throw new Error();
//             }
//         });

export default stylesLint;
