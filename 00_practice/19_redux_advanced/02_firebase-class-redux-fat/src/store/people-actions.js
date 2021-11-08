import axios from 'axios';

export const SET_PEOPLE = 'SET_PEOPLE';
export const ADD_PERSON = 'ADD_PERSON';

export const fetchPeople = () => {
  return async (dispatch) => {
    const res = await axios.get(
      'https://fir-db-connection-sample-default-rtdb.firebaseio.com/people.json'
    );

    const people = [];
    for (let key in res.data) {
      const person = res.data[key];
      console.log(person);
      people.push(person);
    }

    dispatch({
      type: SET_PEOPLE,
      payload: people,
    });
  };
};

export const addPerson = (person) => {
  return async (dispatch) => {
    const res = await axios.post(
      'https://fir-db-connection-sample-default-rtdb.firebaseio.com/people.json',
      person
    );
    console.log(res);

    dispatch({
      type: ADD_PERSON,
      payload: person,
    });
  };
};
