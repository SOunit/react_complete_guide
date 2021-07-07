import classes from './Header.module.css';
import CartButton from './CartButton';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <CartButton onClick={props.onCartButtonClick} />
    </header>
  );
};

export default Header;
