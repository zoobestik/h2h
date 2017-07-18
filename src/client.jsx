/* eslint-env browser */
import { render } from 'react-dom';
import Router from 'react-router-dom/es/BrowserRouter';
import App, { Store } from 'components/App';

global.store = new Store(global.INITIAL_STATE);

render(
    <Router>
        <App store={ global.store }/>
    </Router>,
    document.getElementById('app'),
);
