import React from 'react';
import dropDownBold from '../../images/drop-down-menu-bold.svg'
import tgIcon from '../../images/tg-icon.svg'
import skypeIcon from '../../images/skype-icon.svg'
import phoneIcon from '../../images/phone-icon.svg'

function HeaderContacts() {
  return (
    <div className="header__store-info">
      <div className="header__contacts-container">
        <div className="header__city-info">
          <div className="header__city-menu">
            <p className="header__city">Санкт-Петербург</p>
            <img src={dropDownBold} alt="Иконка выпадающего меню"/>
          </div>
          <div className="header__city-contacts">
            <p className="header__phone">+7 (812) 613-58-38</p>
            <p className="header__working-hours">Пн–пт 10:00–19:00, сб-вс 10:00–17:00</p>
          </div>
        </div>
        <ul className="header__contacts">
          <li className="header__contacts-item">
            <a className="header__link" href="#">Напишите нам</a>
          </li>
          <li className="header__contacts-item">
            <a className="header__link" href="#">Свяжитесь с директором</a>
          </li>
          <li className="header__contacts-item">
            <ul className="header__social-links">
              <li className="header__list-item">
                <a className="header__link" href="https://telegram.org/">
                  <img className="header__icon" src={tgIcon} alt="Telegram"/>
                </a>
              </li>
              <li className="header__list-item">
                <a className="header__link" href="https://www.skype.com/ru/">
                  <img className="header__icon" src={skypeIcon} alt="Skype"/>
                </a>
              </li>
              <li className="header__list-item">
                <a className="header__link" href="#">
                  <img className="header__icon" src={phoneIcon} alt="Phone"/>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderContacts;
