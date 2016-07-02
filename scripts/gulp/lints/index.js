import gulp from 'gulp';
import eslintLint, { eslintFix, eslintClean } from './eslint';
import stylelint from './stylelint';

export const fixer = gulp.parallel(
    eslintFix,
);

export const clean = gulp.parallel(
    eslintClean,
);

export default gulp.parallel(
    eslintLint,
    stylelint,
);
