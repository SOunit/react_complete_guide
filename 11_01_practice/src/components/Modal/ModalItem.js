import classes from './ModalItem.module.css';

const ModalItem = (props) => {
  return (
    <div className={classes.item}>
      <div>
        <h2>{props.item.title}</h2>
        <div className={classes.price}>{props.item.amount}</div>
        <div className={classes.count}>x {props.item.count}</div>
      </div>
      <div className={classes.controls}>
        <button
          className={classes.button}
          onClick={() => props.onClick(props.item.id)}
        >
          -
        </button>
        <button className={classes.button}>+</button>
      </div>
    </div>
  );
};

export default ModalItem;
