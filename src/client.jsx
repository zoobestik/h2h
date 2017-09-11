/* eslint-env browser */
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { useStrict } from 'mobx';
import * as storeTreeUtils from 'mobx-state-tree';
import App from 'components/App';
import Store from 'components/App/store';
import api from 'app/api';

useStrict(true);

const state = global.INITIAL_STATE || {
    title: document.title,
    route: { state: { key: 'PageNoMatchView' } },
    user: null,
};

const store = Store.create(state, {
    ...api,
    history: createBrowserHistory(),
});

global.store = store;
global.storeTreeUtils = storeTreeUtils;

render(<App store={ store }/>, document.getElementById('app'));
