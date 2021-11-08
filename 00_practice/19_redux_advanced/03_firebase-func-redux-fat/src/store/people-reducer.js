import { ADD_PERSON, SET_PEOPLE } from './people-actions';

const INITIAL_STATE = [];

const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return [...state, action.payload];
    case SET_PEOPLE:
      return action.payload;
    default:
      return state;
  }
};

export default peopleReducer;
