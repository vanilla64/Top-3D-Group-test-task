import React from 'react';
import './CartBtn.css';
import cartIcon from '../../images/cart.svg'

function CartBtn() {
  return (
    <button className="cart-btn">
      <img className="cart-btn__img" src={cartIcon} alt="Корзина"/>
      <p className="cart-btn__text">Корзина пуста</p>
    </button>
  );
}

export default CartBtn;