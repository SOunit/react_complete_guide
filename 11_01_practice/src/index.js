import ReactDOM from 'react-dom';
import CartContext from './store/cart-context';

import './index.css';
import App from './App';

ReactDOM.render(
  <CartContext.Provider value={{ items: [] }}>
    <App />
  </CartContext.Provider>,
  document.getElementById('root')
);
