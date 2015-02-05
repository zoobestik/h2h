'use strict';

var React = require('react'),
    Router = require('react-router');

require('node-jsx').install({
    harmony: false,
    extension: '.jsx',
    stripTypes: false
});

module.exports = function(req, res, next) {
    Router.run(require('components/routes'), req.url, function(Handler, state) {
        var Page = require('components/page'),
            markup = '<!DOCTYPE html>' + React.renderToStaticMarkup(React.createElement(Page, {
                component: React.createElement(Handler)
            }));

        if (state.routes[0].name === 'not-found') {
            res.status(404);
        }

        res.send(markup);
    });
};