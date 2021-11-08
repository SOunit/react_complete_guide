import { createStore, combineReducers } from 'redux';
import { ADD_PERSON, SET_PEOPLE } from './people-actions';

const INITIAL_STATE = { people: [] };

const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PEOPLE:
      return { people: action.payload };
    case ADD_PERSON:
      return { people: [...state.people, action.payload] };
    default:
      return state;
  }
};

const reducer = combineReducers({ people: peopleReducer });

const store = createStore(reducer);

export default store;
