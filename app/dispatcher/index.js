import React from 'react';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from 'app/routes';
import { renderReactPage } from './react';

export default {
    /**
     * Init function for route and render based on React
     *
     * @returns {Function} react-router-middleware for connect
     */
    init: function() {
        return (req, res, next) => {
            const location = createLocation(req.url);

            match({ routes, location }, (err, redirectLocation, renderProps) => {
                console.log(arguments);

                if (err) {
                    return next(err);
                }

                if (redirectLocation) {
                    return next(new Error('Location: ' + redirectLocation));
                }

                if (renderProps === null) {
                    return next(new Error('Not found'));
                }

                res.end(renderReactPage(<RoutingContext {...renderProps} />));
            });
        };
    },
};
