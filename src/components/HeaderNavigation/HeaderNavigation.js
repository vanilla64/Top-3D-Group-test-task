import React from 'react';
import dropDownLight from "../../images/drop-down-menu-light.svg";

function HeaderNavigation(props) {
  return (
    <nav className="header__navigation">
      <ul className="header__navigation-list">
        <li className="header__navigation-list-item">
          <p className="header__navigation-text">3D-принтеры</p>
          <img className="header__navigation-img" src={dropDownLight} alt="Иконка выпадающего меню"/>
        </li>
        <li className="header__navigation-list-item">
          <p className="header__navigation-text">3D-сканеры</p>
          <img className="header__navigation-img" src={dropDownLight} alt="Иконка выпадающего меню"/>
        </li>
        <li className="header__navigation-list-item">
          <p className="header__navigation-text">Станки</p>
          <img className="header__navigation-img" src={dropDownLight} alt="Иконка выпадающего меню"/>
        </li>
        <li className="header__navigation-list-item">
          <p className="header__navigation-text">Роботы</p>
          <img className="header__navigation-img" src={dropDownLight} alt="Иконка выпадающего меню"/>
        </li>
        <li className="header__navigation-list-item">
          <p className="header__navigation-text">Образование</p>
          <img className="header__navigation-img" src={dropDownLight} alt="Иконка выпадающего меню"/>
        </li>
        <li className="header__navigation-list-item">
          <p className="header__navigation-text">Стоматологам</p>
          <img className="header__navigation-img" src={dropDownLight} alt="Иконка выпадающего меню"/>
        </li>
        <li className="header__navigation-list-item">
          <p className="header__navigation-text">Гаджеты</p>
          <img className="header__navigation-img" src={dropDownLight} alt="Иконка выпадающего меню"/>
        </li>
        <li className="header__navigation-list-item">
          <p className="header__navigation-text">Материалы</p>
          <img className="header__navigation-img" src={dropDownLight} alt="Иконка выпадающего меню"/>
        </li>
        <li className="header__navigation-list-item">
          <p className="header__navigation-text">ПО</p>
          <img className="header__navigation-img" src={dropDownLight} alt="Иконка выпадающего меню"/>
        </li>
        <li className="header__navigation-list-item">
          <p className="header__navigation-text">Решения</p>
          <img className="header__navigation-img" src={dropDownLight} alt="Иконка выпадающего меню"/>
        </li>
        <li className="header__navigation-list-item">
          <p className="header__navigation-text">Учебный центр</p>
          <img className="header__navigation-img" src={dropDownLight} alt="Иконка выпадающего меню"/>
        </li>
        <li className="header__navigation-list-item">
          <p className="header__navigation-text">Услуги</p>
          <img className="header__navigation-img" src={dropDownLight} alt="Иконка выпадающего меню"/>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;