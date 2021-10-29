import React from 'react';
import './movies-card.css';
import exampleCardImage from '../../images/example-cards/1.png';

const MoviesCard = ({ isDeletable }) => {

  return (
    <li className='movies-card'>
      <div className='movies-card__info'>
        <p className='movies-card__title'>Киноальманах «100 лет дизайна»</p>
        <span className='movies-card__duration'>1ч 42м</span>
        {isDeletable ? 
          <button className='movies-card__delete-button'></button>
          :
          <button className='movies-card__like-button'></button>
        }
      </div>
      <img className='movies-card__card-image' alt='фото карточки' src={exampleCardImage} />
    </li>
  )
};

export default MoviesCard;
