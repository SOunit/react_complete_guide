import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendPersonData, fetchPeopleData } from './store/people-actions';
import './App.css';

function App() {
  const people = useSelector((state) => state.people.people);
  const dispatch = useDispatch();

  const fetchHandler = useCallback(async () => {
    dispatch(fetchPeopleData());
  }, [dispatch]);

  const AddHandler = async () => {
    const person = { id: Math.random(), name: 'Jack' };

    dispatch(sendPersonData(person));
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
