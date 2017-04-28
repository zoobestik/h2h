import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';
import imports from 'postcss-import';

export const postcssPlugins = [
    imports,
    autoprefixer({
        browsers: [ // @ToDo: move to package.json
            'last 2 versions',
            'not ios < 10',
            'not safari < 10',
            'not ie <= 11',
        ],
    }),
    nested,
];

export default () => new Error('Not implemented');
