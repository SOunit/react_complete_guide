export const SET_PEOPLE = 'SET_PEOPLE';
export const ADD_PERSON = 'ADD_PERSON';

export const setPeople = (people) => {
  return { type: SET_PEOPLE, payload: people };
};

export const addPerson = (person) => {
  return { type: ADD_PERSON, payload: person };
};
