/* eslint-env browser */
import { render } from 'react-dom';
import browserHistory from 'react-router/lib/browserHistory';
import App, { Store } from 'components/App';

global.store = new Store(global.INITIAL_STATE);

render(
    <App
        history={ browserHistory }
        store={ global.store }
    />,
    document.getElementById('app'),
);
