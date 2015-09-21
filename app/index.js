require('babel-core/register')({
    sourceMap: 'inline',
    compact: false,
});

const PORT = process.env.port || 3000;
const app = require('./webserver');

const server = require('http').createServer(app);

server.listen(PORT, function(error) {
    if (error) {
        console.error(error);
    }
    else {
        console.info(`==> Listening on port ${PORT}. Open up http://localhost:${PORT}/ in your browser.`);
    }
});
