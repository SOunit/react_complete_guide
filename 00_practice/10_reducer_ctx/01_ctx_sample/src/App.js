import { useContext } from 'react';
import './App.css';
import PeopleList from './components/PeopleList';
import PeopleContext from './store/people-context';

function App() {
  const peopleCtx = useContext(PeopleContext);
  console.log(peopleCtx.people);

  const addJackHandler = () => {
    peopleCtx.addPerson({ id: Math.random(), Name: 'Jack' });
  };

  return (
    <div className='App'>
      <button className='btn' onClick={addJackHandler}>
        Add Jack
      </button>
      <PeopleList />
    </div>
  );
}

export default App;
