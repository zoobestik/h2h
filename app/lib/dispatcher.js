var url = require('url'),
    Dispatcher;

Dispatcher = function() {};

Dispatcher.prototype.staticFiles = require('serve-static');

Dispatcher.prototype.reactRouter = function() {
    return function(req, res) {
        res.render('page/index', {
            path: url.parse(req.url).pathname
        });
    };
};

module.exports = Dispatcher;
