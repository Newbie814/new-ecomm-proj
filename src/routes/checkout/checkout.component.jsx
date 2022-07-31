import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const CheckoutPageComponent = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout Page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, price, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>decrement</span>
              <span>{quantity}</span>
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutPageComponent;
