import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../../components/button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

import React from 'react';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);
  const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);
  const navigate = useNavigate();

  const goToCheckoutPageHandler = () => {
    toggleCartDropdown();
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutPageHandler}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
