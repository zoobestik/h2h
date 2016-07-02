import { fromJS } from 'immutable';
import { createStore/* , applyMiddleware */ } from 'redux';
// import thunk from 'redux-thunk';

import reducer from './reducers';
// import * as api from './api';

export default initialState =>
    createStore(
        reducer,
        fromJS(initialState || {}),
        //applyMiddleware(thunk.withExtraArgument(api)),
    );
