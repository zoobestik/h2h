import { combineReducers } from 'redux-immutable';

const csrf = (state = '') => state;

export default combineReducers({
    csrf,
});
