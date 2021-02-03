import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form">
      <input
        className='search-form__input'
        placeholder="Введите запрос, например, Formlabs Form 2"
        type="text"/>
      <button className="search-form__button" type="submit">Найти</button>
    </form>
  );
}

export default SearchForm;
