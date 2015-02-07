'use strict';

var Promise = require('bluebird');

class Controller {

    constructor(req, res) {
        this._req = req;
        this._res = res;
    }

    get req() {
        return this._req;
    }

    get res() {
        return this._res;
    }

    fetch() {
        return Promise.resolve();
    }
}

module.exports = Controller;
