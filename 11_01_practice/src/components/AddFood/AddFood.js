import classes from './AddFood.module.css';
import AddFoodItem from './AddFoodItem';

const AddFood = (props) => {
  const items = props.menu.map((item) => (
    <AddFoodItem
      key={item.id}
      title={item.title}
      description={item.description}
      amount={item.amount}
    />
  ));

  return (
    <div className={classes.addFood}>
      <ul className={classes.addFoodItems}>{items}</ul>
    </div>
  );
};

export default AddFood;
