import React from 'react';

import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from 'components/routes';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from 'app/reducers';

import { default as ReactDOMServer } from 'react-dom/server';

/**
 * Wrap html for react component
 *
 * @param {React.Component} component root element
 * @param {Object} initialState store state for clientside
 *
 * @returns {String}
 */
export function renderReactPage(component, initialState) {
    const html = ReactDOMServer.renderToString(component);

    return `<!doctype html>
<html>
  <head>
    <title>Redux Universal Example</title>
  </head>
  <body>
    <div id="app">${html}</div>
    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
    </script>
    <script src="/js/script.js"></script>
  </body>
</html>`;
}

export default (req, res, next) => {
    const location = createLocation(req.url);
    const store = createStore(reducer);

    match({ routes, location }, (err, redirectLocation, renderProps) => {

        if (err) {
            return next(err);
        }

        if (redirectLocation) {
            return next(new Error('Location: ' + redirectLocation));
        }

        if (renderProps === null) {
            return next(new Error('Not found'));
        }

        const component = (
            <Provider store={ store }>
                <RoutingContext {...renderProps} />
            </Provider>
        );

        res.end(renderReactPage(component, store.getState()));
    });
};
