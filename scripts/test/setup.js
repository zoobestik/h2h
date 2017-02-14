import chai from 'chai';
import sinonChai from 'sinon-chai';
import { jsdom } from 'jsdom';
import * as lib from './lib';

chai.use(sinonChai);

require.extensions['.css'] = () => null;
require.extensions['.pcss'] = () => null;

const exposedProperties = [
    'window',
    'navigator',
    'document',
];

Object.keys(lib).forEach(item => {
    exposedProperties.push(item);
    global[item] = lib[item];
});

const document = jsdom('');

global.document = document;
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
