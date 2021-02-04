import React from 'react';
import './SwipeButtons.css'
import swipeIcon from '../../images/swipe-icon.svg'

function SwipeButtons(props) {
  return (
    <div className="swipe__buttons">
      <button className="swipe__buttons__btn">
        <img className="swipe__buttons__img swipe__buttons__img_side_left" src={swipeIcon} alt="Кнопка свайп"/>
      </button>
      <div className="swipe__buttons__break"></div>
      <button className="swipe__buttons__btn">
        <img className="swipe__buttons__img swipe__buttons__img_side_right" src={swipeIcon} alt="Кнопка свайп"/>
      </button>
    </div>
  );
}

export default SwipeButtons;
