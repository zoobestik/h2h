/* eslint-env browser */
import { render } from 'react-dom';
import { useStrict } from 'mobx';
import * as mobxStateTree from 'mobx-state-tree';
import Router from 'react-router-dom/es/BrowserRouter';
import App from 'components/App';
import Store from 'components/App/store';

useStrict(true);

const store = Store.create(global.INITIAL_STATE || {
    page: {
        title: document.title,
        content: {
            key: 'PageNoMatchView',
        },
    },
});

global.store = store;
global.mobxStateTree = mobxStateTree;

render(
    <Router>
        <App store={ store }/>
    </Router>,
    document.getElementById('app'),
);
