import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from 'components/routes';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from 'app/reducers';

/**
 * Wrap html for react component
 *
 * @param {React.Component} component root element
 * @param {Object} initialState store state for clientside
 */
export const renderReactPage = (component, initialState) => (
    `<!doctype html>
<html>
  <head>
    <title>Redux Universal Example</title>
  </head>
  <body>
    <div id="app">${renderToString(component)}</div>
    <script>
      window.__INITIAL_STATE__ = ${
        JSON.stringify(initialState)
            .replace(/</g, '\\u003c')
            .replace(/>/g, '\\u003e')
      };
    </script>
    <script src="/js/script.js"></script>
  </body>
</html>`
);

export default (req, res, next) => {
    const store = createStore(reducer);

    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
        if (err) {
            return next(err);
        }

        if (redirectLocation) {
            return next(new Error('Location: ' + redirectLocation));
        }

        if ( ! renderProps) {
            return next(new Error('Not found'));
        }

        const component = (
            <Provider store={ store }>
                <RouterContext {...renderProps} />
            </Provider>
        );

        res.end(renderReactPage(component, store.getState()));
    });
};
