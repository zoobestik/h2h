import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { createStore } from 'app/store';
import routes from 'components/routes';
import reducer from 'app/reducers';
import { NotFoundError, RedirectError } from '../errors';

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
    <link rel="stylesheet" href="/rs/bundle.css">
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
    <script src="/rs/bundle.js" async></script>
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
            return next(new RedirectError(redirectLocation));
        }

        if ( ! renderProps) {
            return next(new NotFoundError());
        }

        const component = (
            <Provider store={ store }>
                <RouterContext {...renderProps} />
            </Provider>
        );

        res.end(renderReactPage(component, store.getState()));
    });
};
