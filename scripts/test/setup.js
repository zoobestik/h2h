import chai from 'chai';
import sinonChai from 'sinon-chai';
import { jsdom } from 'jsdom';

chai.use(sinonChai);

require.extensions['.css'] = () => null;
require.extensions['.pcss'] = () => null;

const exposedProperties = [
    'window',
    'navigator',
    'document',
];

const document = global.document = jsdom('');

global.window = document.defaultView;

Object.keys(document.defaultView).forEach(property => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js',
};
