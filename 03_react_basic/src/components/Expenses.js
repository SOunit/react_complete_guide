import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  const items = props.items.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });

  return <div className='expenses'>{items}</div>;
}

export default Expenses;
