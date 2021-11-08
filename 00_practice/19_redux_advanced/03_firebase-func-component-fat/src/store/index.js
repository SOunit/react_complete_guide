import { createStore, combineReducers } from 'redux';
import { SET_PEOPLE } from './people-actions';

const INITIAL_STATE = { people: [] };

const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PEOPLE:
      console.log('set people');
      console.log(action.payload);
      return { people: action.payload };
    default:
      return state;
  }
};

const reducer = combineReducers({ people: peopleReducer });

const store = createStore(reducer);

export default store;
