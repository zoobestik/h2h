import http from 'http';
import connect from 'connect';
import bodyParser from 'body-parser';
import { errors, react } from 'app/dispatcher';

const PORT = process.env.port || 3000;

const app = connect()
    .use(bodyParser.urlencoded({ extended: false }))
    .use(react)
    .use(errors.handle());

const server = http.createServer(app);

server.listen(PORT, function(error) {
    if (error) {
        console.error(error);
    }
    else {
        console.info('==> listening...');
    }
});

export default server;
