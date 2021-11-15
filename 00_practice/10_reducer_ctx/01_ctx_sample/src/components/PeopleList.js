import { useContext } from 'react';
import PeopleContext from '../store/people-context';

const PeopleList = () => {
  const peopleCtx = useContext(PeopleContext);
  console.log(peopleCtx.people);
  return <div>peopleList</div>;
};

export default PeopleList;
