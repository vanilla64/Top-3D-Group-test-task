import React from 'react';
import './Logo.css'
import logo from '../../images/logo.png'

function Logo(props) {
  return (
    <a href="#" className="logo">
      <img className="logo__img" src={logo} alt="Логотип"/>
      <h1 className="logo__title">
        Ваш эксперт на&nbsp;рынке<span className="logo__text_type_red">&nbsp;3D</span>-техники
      </h1>
    </a>
  );
}

export default Logo;
