'use strict';

var BaseController = require('app/controllers'),
    Promise = require('bluebird');

class IndexPage extends BaseController {
    fetch () {
        return new Promise((done) => {
            setTimeout(() => {
                done({
                    commonInfo: {
                        name: 'user'
                    }
                });
            });
        });
    }
}

module.exports = IndexPage;
