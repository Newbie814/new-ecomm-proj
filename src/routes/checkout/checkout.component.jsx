import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const CheckoutPageComponent = () => {
  const { cartItems, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        const { id, name, price, quantity } = cartItem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span onClick={() => removeItemToCart(cartItem)}>decrement</span>
            <span>{quantity}</span>
            <span onClick={() => addItemToCart(cartItem)}>increment</span>
          </div>
        );
      })}
      <span className='Total'>Total: 0</span>
    </div>
  );
};

export default CheckoutPageComponent;