import classes from './AddFood.module.css';
import AddFoodItem from './AddFoodItem';

const AddFood = () => {
  return (
    <div className={classes.addFood}>
      <ul className={classes.addFoodItems}>
        <AddFoodItem />
        <AddFoodItem />
        <AddFoodItem />
      </ul>
    </div>
  );
};

export default AddFood;
