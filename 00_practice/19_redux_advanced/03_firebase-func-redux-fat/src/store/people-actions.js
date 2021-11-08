import axios from 'axios';

export const ADD_PERSON = 'ADD_PERSON';
export const SET_PEOPLE = 'SET_PEOPLE';

export const addPerson = (person) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        'https://fir-db-connection-sample-default-rtdb.firebaseio.com/people.json',
        person
      );
      console.log(res);

      if (res.status !== 200) {
        throw new Error('Add person failed.');
      }

      dispatch({ type: ADD_PERSON, payload: person });
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchPeople = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        'https://fir-db-connection-sample-default-rtdb.firebaseio.com/people.json'
      );

      if (res.status !== 200) {
        throw new Error('Fetch people failed.');
      }

      const people = [];
      for (let key in res.data) {
        const person = res.data[key];
        console.log(person);
        people.push(person);
      }

      dispatch({ type: SET_PEOPLE, payload: people });
    } catch (err) {
      console.log(err);
    }
  };
};
