import axios from 'axios';
import { peopleActions } from './people-slice';

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
