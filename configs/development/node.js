'use strict';

let secret = 'secret';

try {
    secret = require('../common').secret;
} catch(e) {
    console.warn('common file is broken');
}

module.exports = {
    port: 3000,
    secret: secret,
};
