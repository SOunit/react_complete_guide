import { SET_PEOPLE } from './people-actions';

const INITIAL_STATE = { people: [] };

const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PEOPLE:
      return { people: action.payload };
    default:
      return state;
  }
};

export default peopleReducer;
