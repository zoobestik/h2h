require('babel-register');

module.exports = require('./webpack')[process.env.NODE_ENV || 'development'];
