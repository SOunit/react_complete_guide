import React from 'react';
import Expenses from './components/Expenses';

function App() {
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

  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses items={expenses} />
  //   </div>
  // );

  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Let's get started!"),
    React.createElement(Expenses, { items: expenses })
  );
}

export default App;
