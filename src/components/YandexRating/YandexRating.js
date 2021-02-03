import React from 'react';
import './YandexRating.css'
import ratingImg from '../../images/yandex-rating.png'

function YandexRating(props) {
  return (
    <a href="#" target="_blank" className="yandex-rating">
      <img className="yandex-rating__img" src={ratingImg} alt="Отзывы Yandex"/>
    </a>
  );
}

export default YandexRating;
