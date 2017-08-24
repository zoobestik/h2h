/* eslint-env browser */
import { render } from 'react-dom';
import { useStrict } from 'mobx';
import Router from 'react-router-dom/es/BrowserRouter';
import App from 'components/App';
import Store from 'components/App/store';

useStrict(true);

const store = Store.create(global.INITIAL_STATE || {
    page: {
        title: document.title,
        content: {
            key: 'PageView',
        },
    },
});

render(
    <Router>
        <App store={ global.store = store }/>
    </Router>,
    document.getElementById('app'),
);
