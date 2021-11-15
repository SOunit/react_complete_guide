import { createContext, useState } from 'react';

const PeopleContext = createContext({
  people: [],
  addPerson: (person) => {},
});

export const PeopleContextProvider = (props) => {
  const [people, setPeople] = useState([]);

  const addPersonHandler = (person) => {
    setPeople((prevState) => [...prevState, person]);
  };

  const context = { people, addPerson: addPersonHandler };

  return (
    <PeopleContext.Provider value={context}>
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleContext;
