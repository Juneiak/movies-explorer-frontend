import React from 'react';
import './movies-card-list.css';

const MoviesCardList = ({ children, onMoreButtonClick, buttonStatus }) => {

  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        <ul className='movies-card-list__list'>
          { children }
        </ul>
        {buttonStatus && <button onClick={onMoreButtonClick} type='button' className='movies-card-list__more-button'>Ещё</button>}
      </div>
    </section>
  );
};

export default MoviesCardList;
