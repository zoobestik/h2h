import { combineReducers } from 'redux';

function user(state = {}, action = {}) {
    switch(action.type) {
        case 'GET_USER_INFO':
            return action.user;
        default:
            return state;
    }
}

const initialTextsState = [ 'text1', 'text2' ];

function texts(state = initialTextsState, action = {}) {
    switch (action.type) {
        case 'ADD_TEXT':
            return state.concat([ action.text ]);
        default:
            return state;
    }
}

export default combineReducers({
    user,
    texts,
});
