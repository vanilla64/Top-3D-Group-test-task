import React from 'react';
import Logo from "../Logo/Logo";
import YandexRating from "../YandexRating/YandexRating";
import SearchForm from "../SearchForm/SearchForm";
import AuthBtn from "../AuthBtn/AuthBtn";
import CartBtn from "../CartBtn/CartBtn";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";

function HeaderMainContent() {
  return (
    <div className="header__main-content">
      <div className="header__main-block">
        <Logo />
        <YandexRating />
        <SearchForm />
        <AuthBtn />
        <CartBtn />
      </div>
      <HeaderNavigation />
    </div>
  );
}

export default HeaderMainContent;
