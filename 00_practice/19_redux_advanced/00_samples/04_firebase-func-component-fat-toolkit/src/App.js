import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { peopleActions } from './store';
import axios from 'axios';
import './App.css';

function App() {
  const people = useSelector((state) => state.people.people);
  const dispatch = useDispatch();

  const fetchHandler = useCallback(async () => {
    const res = await axios.get(
      'https://fir-db-connection-sample-default-rtdb.firebaseio.com/people.json'
    );

    const people = [];
    for (let key in res.data) {
      const person = res.data[key];
      people.push(person);
    }

    dispatch(peopleActions.setPeople(people));
  }, [dispatch]);

  const AddHandler = async () => {
    const person = { id: Math.random(), name: 'Jack' };

    dispatch(peopleActions.addPerson(person));

    const res = await axios.post(
      'https://fir-db-connection-sample-default-rtdb.firebaseio.com/people.json',
      person
    );
    console.log(res);
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
