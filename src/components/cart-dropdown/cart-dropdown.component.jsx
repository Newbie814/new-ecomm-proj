import Button from '../../components/button/button.component';

import './cart-dropdown.styles.scss';

import React from 'react';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
