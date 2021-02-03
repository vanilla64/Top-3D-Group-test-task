import React from 'react';
import './AuthBtn.css'
import loginIcon from '../../images/login-icon.svg'

function AuthBtn() {
  return (
    <button className="auth-btn">
      <img className="auth-btn__img" src={loginIcon} alt="Войти"/>
      <p className="auth-btn__text">Войти</p>
    </button>
  );
}

export default AuthBtn;
