import React from 'react';
import './SearchForm.css';
import loupe from '../../images/loupe.svg'

function SearchForm() {
  return (
    <form className="search-form">
      <input
        className='search-form__input'
        placeholder="Введите запрос, например, Formlabs Form 2"
        type="text"/>
      <button className="search-form__button" type="submit">
        <p className="search-form__text">Найти</p>
        <img className="search-form__img" src={loupe} alt="Поиск"/>
      </button>
    </form>
  );
}

export default SearchForm;
