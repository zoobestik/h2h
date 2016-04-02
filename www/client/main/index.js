import React from 'react';
import ReactDOM from 'react-dom';

import { browserHistory, Router } from 'react-router';
import routes from 'components/routes';

import { createStore } from 'app/store';
import { Provider } from 'react-redux';
import reducer from 'app/reducers';

const store = createStore(reducer, window.__INITIAL_STATE__);

ReactDOM.render(
    <Provider store={ store }>
        <Router children={ routes } history={ browserHistory } />
    </Provider>,
    document.getElementById('app')
);
