import chai from 'chai';
import sinon from 'sinon-chai';
import { JSDOM } from 'jsdom';
import * as lib from './lib';

chai.use(sinon);

require.extensions['.css'] = () => null;
require.extensions['.pcss'] = () => null;

const { window } = new JSDOM('<!doctype html><html><head></head><main></main></html>');

global.window = window;
global.document = window.document;
global.navigator = window.navigator;

global.requestAnimationFrame = frameCallback => {
    setTimeout(frameCallback, 16);
    return 0;
};

Object.keys(lib).forEach(item => {
    global[item] = lib[item];
});
