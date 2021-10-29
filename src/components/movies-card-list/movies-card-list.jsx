import React from 'react';
import './movies-card-list.css';
import MoviesCard from './../movies-card/movies-card';

const MoviesCardList = (isDeletable=false) => {

  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        <ul className='movies-card-list__list'>
          <MoviesCard isDeletable={isDeletable}/>
          <MoviesCard isDeletable={isDeletable}/>
          <MoviesCard isDeletable={isDeletable}/>
        </ul>
        <button className='movies-card-list__more-button'>Ещё</button>
      </div>
    </section>
  )
};

export default MoviesCardList;
