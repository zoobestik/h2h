import Immutable from 'immutable';
import { createStore as createReduxStore } from 'redux';

export const createStore = reducer => createReduxStore(reducer, Immutable.Map());
