import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const peopleSlice = createSlice({
  name: 'people',
  initialState: { people: [] },
  reducers: {
    addPerson: (state, action) => {
      state.people.push(action.payload);
    },
    setPeople: (state, action) => {
      state.people = action.payload;
    },
  },
});

export const peopleActions = peopleSlice.actions;

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

export default peopleSlice.reducer;
