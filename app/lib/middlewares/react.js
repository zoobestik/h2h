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
        let router = Router.create({
            routes: require('components/routes'),
            location: req.url,
            onError: function(error) {
                next(error)
            },
            onAbort: function(abortReason) {
                let err = abortReason;

                if (abortReason.constructor.name === 'Redirect') {
                    err = { redirect: this.makePath(abortReason.to, abortReason.params, abortReason.query) };
                }

                next(err);
            }
        });

        router.run(function(Handler, state) {
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

                    res.end('<!DOCTYPE html>' + React.renderToStaticMarkup(page));
                })
                .error(function(err) {
                    next(err);
                });
        });
    };
};