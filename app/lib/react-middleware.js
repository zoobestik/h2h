'use strict';

var React = require('react'),
    Router = require('react-router');

require('node-jsx').install({
    harmony: false,
    extension: '.jsx',
    stripTypes: false
});

function getController(state) {
    var Controller;

    for (let routes = state.routes, i = routes.length-1; i >= 0; i--) {
        let handler = routes[i].handler;

        if (handler.Controller) {
            Controller = handler.Controller;
            break;
        }
    }

    return Controller;
}

module.exports = function(req, res, next) {
    Router.run(require('components/routes'), req.url, function(Handler, state) {
        var Controller = getController(state);

        new Controller(req, res, state)
            .fetch()
                .then((data) => {
                    var Page = require('components/page'),
                        component = React.createElement(Page, {
                            component: React.createElement(Handler, { data: data }),
                            data: data
                        });

                    if (state.routes[0].name === 'not-found') {
                        res.status(404);
                    }

                    res.send('<!DOCTYPE html>' + React.renderToStaticMarkup(component));
                })
                .error((err) => {
                    next(err);
                });
    });
};