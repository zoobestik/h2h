'use strict';

const React = require('react');
const Router = require('react-router');
const Promise = require('bluebird');
const Context = require('app/lib/context');

require('node-jsx').install({
    harmony: false,
    extension: '.jsx',
});

module.exports = function() {
    return function(req, res, next) {
        const router = Router.create({
            routes: require('components/routes'),
            location: req.url,
            onError: function(error) {
                next(error);
            },
            onAbort: function(abortReason) {
                let err = abortReason;

                if (abortReason.constructor.name === 'Redirect') {
                    err = { redirect: this.makePath(abortReason.to, abortReason.params, abortReason.query) };
                }

                next(err);
            },
        });

        router.run(function(Handler, state) {
            const context = new Context(state, req, res);
            const contextPromise = Promise.props(
                state.routes.reduce(function(result, route) {
                    const handler = route.handler;

                    if (route.name && handler.action) {
                        console.log('exec:', route.name);
                        result[route.name] = handler.action(context);
                    }

                    return result;
                }, {})
            );

            contextPromise
                .then(function() {
                    const component = React.createElement(Handler, { context: context });
                    const page = React.createElement(require('components/page'), {
                        component: component,
                        context: context,
                        reactVersion: React.version,
                    });

                    res.end('<!DOCTYPE html>' + React.renderToStaticMarkup(page));
                })
                .error(function(err) {
                    next(err);
                });
        });
    };
};
