import connect from 'connect';
import bodyParser from 'body-parser';
import dispatcher from './dispatcher';

export default connect()
    .use(bodyParser.urlencoded())
    .use(dispatcher.init());
