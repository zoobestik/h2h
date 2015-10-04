import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from 'components/routes';
const history = createBrowserHistory();

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from 'app/reducers';

const store = createStore(reducer, window.__INITIAL_STATE__);

ReactDOM.render(
    <Provider store={ store }>
        <Router children={ routes } history={ history } />
    </Provider>,
    document.getElementById('app')
);
