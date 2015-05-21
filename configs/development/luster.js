var path = require('path'),
    logs = path.resolve.bind(path, process.env.LOGS_DIR || './logs');

module.exports = {
    app: require.resolve('app'),

    workers: 1,

    control: {
        forkTimeout: 3000,
        stopTimeout: 10000,
        exitThreshold: 5000,
        allowedSequentialDeaths: 10
    },

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
        },
        'luster-guard': {
            path: '../..',
            debounce: 2000,
            interval: 300,
            silent: true,
            patterns: [
                'app/**/*.js',
                'components/**/*.jsx',
                'configs/*.js',
                'configs/current/*.js'
            ]
        }
    }
};