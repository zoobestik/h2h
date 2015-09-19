import { default as ReactDOMServer } from 'react-dom/server';

/**
 * Wrap html for react component
 *
 * @param {React.Component} component root element
 * @param {object} initialState store state for clientside
 *
 * @returns {string}
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
    <script src="/bundle.js"></script>
  </body>
</html>`;
}
