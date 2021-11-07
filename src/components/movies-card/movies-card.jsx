import React from 'react';
import './movies-card.css';
import PropTypes from 'prop-types';

const MoviesCard = ({ isDeletable = false, item: {
  id,
  nameRU,
  duration,
  image: {url},
}}) => {

  const handledDurationHour = Math.floor(duration / 60);
  const handledDurationMin = duration % 60;

  return (
    <li className='movies-card'>
      <div className='movies-card__info'>
        <p className='movies-card__title'>{nameRU}</p>
        <span className='movies-card__duration'>{`${handledDurationHour}ч ${handledDurationMin}м`}</span>
        {isDeletable
          ? <button className='movies-card__delete-button' />
          : <button className='movies-card__like-button' />}
      </div>
      <img className='movies-card__card-image' alt='фото карточки' src={`https://api.nomoreparties.co${url}`} />
    </li>
  );
};
MoviesCard.propTypes = {
  isDeletable: PropTypes.bool,
};
export default MoviesCard;
