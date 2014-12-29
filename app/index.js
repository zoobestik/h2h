var path = require('path'),
    express = require('express'),
    basePath = path.join(__dirname, '..'),
    app = express(),
    Dispatcher = require('app/lib/dispatcher'),
    dispatcher = new Dispatcher();

app.disable('x-powered-by');

app.set('views', path.join(basePath, 'components'));
app.set('view engine', 'jsx');

app.engine('jsx', require('express-react-views').createEngine({
    jsx: { harmony: true }
}));

app.use(dispatcher.staticFiles(path.join(basePath, 'dist')));
app.use(dispatcher.reactRouter());

module.exports = app;

if (process.env.port) {
    app.listen(process.env.port);
}
