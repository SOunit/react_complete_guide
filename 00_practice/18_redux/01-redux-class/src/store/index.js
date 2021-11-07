import { combineReducers, createStore } from 'redux';

import counterReducer from './counter';
import authReducer from './auth';

const reducer = combineReducers({ counter: counterReducer, auth: authReducer });

const store = createStore(reducer);

export default store;
