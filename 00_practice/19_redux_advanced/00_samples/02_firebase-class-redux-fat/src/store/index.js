import { createStore } from 'redux';
import { combineReducers } from 'redux';
import peopleReducer from './people-reducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({ people: peopleReducer });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
