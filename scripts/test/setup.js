import chai from 'chai';
import sinonChai from 'sinon-chai';
import { JSDOM } from 'jsdom';
import * as lib from './lib';

chai.use(sinonChai);

require.extensions['.css'] = () => null;
require.extensions['.pcss'] = () => null;

const { window } = new JSDOM('<!doctype html><html><head></head><body></body></html>');

global.window = window;
global.document = window.document;
global.navigator = window.navigator;

Object.keys(lib).forEach(item => {
    global[item] = lib[item];
});
