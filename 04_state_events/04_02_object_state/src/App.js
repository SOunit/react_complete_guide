import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      id: '1',
      title: 'Car Insurance',
      amount: 24.33,
      date: new Date(2021, 2, 28),
    },
    {
      id: '2',
      title: 'Book Insurance',
      amount: 24.33,
      date: new Date(2021, 3, 28),
    },
    {
      id: '3',
      title: 'House Insurance',
      amount: 24.33,
      date: new Date(2021, 4, 28),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
