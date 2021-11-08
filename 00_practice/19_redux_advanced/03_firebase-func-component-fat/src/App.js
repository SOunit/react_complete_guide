import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setPeople, addPerson } from './store/people-actions';
import './App.css';

function App() {
  const people = useSelector((state) => state.people.people);
  const dispatch = useDispatch();

  const fetchHandler = useCallback(async () => {
    try {
      const res = await axios.get(
        'https://fir-db-connection-sample-default-rtdb.firebaseio.com/people.json'
      );

      if (res.status !== 200) {
        throw new Error('Failed to fetch people.');
      }

      const people = [];
      for (let key in res.data) {
        const person = res.data[key];
        people.push(person);
      }

      dispatch(setPeople(people));
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  const AddHandler = async () => {
    try {
      const person = { id: Math.random(), name: 'Jack' };

      const res = await axios.post(
        'https://fir-db-connection-sample-default-rtdb.firebaseio.com/people.json',
        person
      );

      if (res.status !== 200) {
        throw new Error('Failed to add person');
      }

      dispatch(addPerson(person));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  return (
    <div className='App'>
      <div>
        <button onClick={AddHandler}>Add Jack</button>
      </div>
      <div>
        {people.map((person) => (
          <div className='person' key={person.id}>
            {person.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
