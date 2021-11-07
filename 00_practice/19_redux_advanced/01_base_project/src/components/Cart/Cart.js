import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);

  console.log(cart);

  const cartItemList = cart.map((item, i) => <CartItem key={i} item={item} />);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItemList}</ul>
    </Card>
  );
};

export default Cart;
