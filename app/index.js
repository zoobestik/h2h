require('babel-core/register');

require('css-modules-require-hook')({
    generateScopedName: '[hash:base64:8]',
});

module.exports = require('./webserver').default;
