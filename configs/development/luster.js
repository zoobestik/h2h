var path = require('path'),
    logs = path.resolve.bind(path, process.env.LOGS_DIR || './logs');

module.exports = {
    app: require.resolve('app'),
    workers: 1,

    server: {
        port: process.env.NODE_PORT || 3000
    },

    debug: {
        port: process.env.NODE_DEBUG_PORT || 5010
    },

    extensions: {
        'luster-log-file': {
            extendConsole: true,
            stdout: logs('debug.log'),
            stderr: logs('error.log')
        }
    }
};