import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    uid: null,
});

export default (state = initialState) => state;
