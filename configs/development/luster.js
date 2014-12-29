var path = require('path'),
    NODE_PORT = process.env.NODE_PORT || 3000,
    NODE_DEBUG_PORT = process.env.NODE_DEBUG_PORT || 5010,
    LOGS_DIR = process.env.LOGS_DIR,
    logs;

logs = path.resolve.bind(path, LOGS_DIR || './logs');

module.exports = {
    app: require.resolve('app'),
    workers: 1,

    server: {
        port: NODE_PORT
    },

    debug: {
        port: NODE_DEBUG_PORT
    },

    extensions: {
        'luster-log-file': {
            extendConsole: true,
            stdout: logs('debug.log'),
            stderr: logs('error.log')
        }
    }
};