import classes from './AddFoodItem.module.css';

const AddFoodItem = () => {
  return (
    <li className={classes.addFoodItem}>
      <div>
        <h3>Shushi</h3>
        <div>some explain</div>
        <div className={classes.amount}>$16.55</div>
      </div>
      <div>
        Amount
        <input value='1' type='number' className={classes.countInput} />
        <button className={classes.foodAddButton}>+ Add</button>
      </div>
    </li>
  );
};

export default AddFoodItem;
