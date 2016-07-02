import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';

export const postcssProcessors = [
    autoprefixer,
    nested,
];

export default () => new Error('Not implemented');
