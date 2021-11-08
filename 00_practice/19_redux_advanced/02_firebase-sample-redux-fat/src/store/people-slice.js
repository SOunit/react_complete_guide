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
export default peopleSlice.reducer;
