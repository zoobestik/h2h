require('babel-register');

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
}

module.exports = require('./scripts/gulp/index').default;
