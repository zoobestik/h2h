import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';
import imports from 'postcss-import';

export const postcssProcessors = [
    imports,
    autoprefixer,
    nested,
];

export default () => new Error('Not implemented');
