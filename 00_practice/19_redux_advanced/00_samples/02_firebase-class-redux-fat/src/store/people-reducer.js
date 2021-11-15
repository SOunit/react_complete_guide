import { ADD_PERSON, SET_PEOPLE } from './people-actions';

const INITIAL_STATE = { people: [] };

const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PEOPLE:
      console.log('set people');
      return { people: action.payload };
    case ADD_PERSON:
      console.log('add person');
      console.log(action);
      return { people: [...state.people, action.payload] };
    default:
      return state;
  }
};

export default peopleReducer;
