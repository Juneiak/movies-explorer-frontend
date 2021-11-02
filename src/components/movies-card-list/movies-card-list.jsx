import React from 'react';
import './movies-card-list.css';

const MoviesCardList = ({ children }) => {
  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        <ul className='movies-card-list__list'>
          { children }
        </ul>
        <button className='movies-card-list__more-button'>Ещё</button>
      </div>
    </section>
  );
};

export default MoviesCardList;
