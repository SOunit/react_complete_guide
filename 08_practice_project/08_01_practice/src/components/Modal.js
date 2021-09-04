import classes from './Modal.module.css';

const Modal = (props) => {
  return (
    <div className={classes.modalBg}>
      <div className={classes.modalBox}>
        <div className={classes.header}>
          <h2>Invalid Input</h2>
        </div>
        <div className={classes.content}>
          <div>{props.message}</div>
          <button onClick={props.onHideModal}>Okay</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
