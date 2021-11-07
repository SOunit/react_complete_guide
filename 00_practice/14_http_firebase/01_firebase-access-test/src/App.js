import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [people, setPeople] = useState([]);

  const fetchHandler = useCallback(async () => {
    const res = await axios.get(
      'https://fir-db-connection-sample-default-rtdb.firebaseio.com/people.json'
    );

    const people = [];
    for (let key in res.data) {
      const person = res.data[key];
      console.log(person);
      people.push(person);
    }

    setPeople(people);
  }, []);

  const saveHandler = async () => {
    const res = await axios.post(
      'https://fir-db-connection-sample-default-rtdb.firebaseio.com/people.json',
      { id: Math.random(), name: 'Jack' }
    );
    console.log(res);
  };

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  return (
    <div className='App'>
      <div>
        {people.map((person) => (
          <div key={person.id}>{person.name}</div>
        ))}
      </div>
      <div>
        <button onClick={fetchHandler}>Fetch</button>
      </div>
      <div>
        <button onClick={saveHandler}>Save</button>
      </div>
    </div>
  );
}

export default App;
