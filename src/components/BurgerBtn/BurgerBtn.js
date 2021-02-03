import React from 'react';
import './BurgerBtn.css';

function BurgerBtn(props) {
  return (
    <button
      className={
        props.isActive
          ? 'burger-btn burger-btn_active'
          : 'burger-btn'
      }
      onClick={props.onClick}
    />
  );
}

export default BurgerBtn;
