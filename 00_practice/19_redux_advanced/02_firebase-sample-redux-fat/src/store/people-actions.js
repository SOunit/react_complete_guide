import axios from 'axios';
import { peopleActions } from './people-slice';

export const fetchPeopleData = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        'https://fir-db-connection-sample-default-rtdb.firebaseio.com/people.json'
      );

      if (res.status !== 200) {
        throw new Error('Failed to fetch people data.');
      }

      const people = [];
      for (let key in res.data) {
        const person = res.data[key];
        people.push(person);
      }

      dispatch(peopleActions.setPeople(people));
    } catch (err) {
      console.log(err);
    }
  };
};

export const sendPersonData = (person) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        'https://fir-db-connection-sample-default-rtdb.firebaseio.com/people.json',
        person
      );
      console.log(res);

      if (res.status !== 200) {
        throw new Error('Sending person data failed.');
      }

      dispatch(peopleActions.addPerson(person));
    } catch (err) {
      console.log(err);
    }
  };
};
