import { createStore } from 'redux';
import { combineReducers } from 'redux';
import peopleReducer from './people-reducer';

const reducer = combineReducers({ people: peopleReducer });

const store = createStore(reducer);

export default store;
