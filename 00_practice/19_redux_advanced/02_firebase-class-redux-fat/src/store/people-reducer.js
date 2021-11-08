const INITIAL_STATE = { people: [] };

export const SET_PEOPLE = 'SET_PEOPLE';

const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PEOPLE:
      console.log('set people');
      return { people: action.payload };
    default:
      return state;
  }
};

export default peopleReducer;
