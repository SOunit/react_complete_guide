import axios from 'axios';
import { peopleActions } from './people-slice';

export const addPerson = (person) => {
  return async (dispatch) => {
    const res = await axios.post(
      'https://fir-db-connection-sample-default-rtdb.firebaseio.com/people.json',
      person
    );
    console.log(res);

    dispatch(peopleActions.addPerson(person));
  };
};

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

    dispatch(peopleActions.setPeople(people));
  };
};
