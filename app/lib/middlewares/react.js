'use strict';

let React = require('react'),
    Router = require('react-router'),
    Promise = require('bluebird'),
    Context = require('app/lib/context');

require('node-jsx').install({
    harmony: false,
    extension: '.jsx',
    stripTypes: false
});

module.exports = function() {
    return function (req, res, next) {
        Router.run(require('components/routes'), req.url, function(Handler, state) {
            let context = new Context(state, req, res),
                contextPromise = Promise.props(
                    state.routes.reduce(function(result, route) {
                        let handler = route.handler;

                        if (route.name && handler.action) {
                            console.log('exec:', route.name);
                            result[route.name] = handler.action(context);
                        }

                        return result;
                    }, {})
                );


            contextPromise
                .then(function() {
                    console.log('context:', context);

                    let component = React.createElement(Handler, { context: context }),
                        page = React.createElement(require('components/page'), {
                            component: component,
                            context: context
                        });

                    res.send('<!DOCTYPE html>' + React.renderToStaticMarkup(page));
                })
                .error(function(err) {
                    next(err);
                });
        });
    };
};