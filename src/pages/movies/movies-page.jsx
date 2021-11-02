import React from 'react';
import './movies-page.css';
import {
  Header, Footer, SearchForm, MoviesCardList, MoviesCard,
} from '../../components/index';

const MoviesPage = () => {
  return (
    <>
      <Header />
      <main className='movies-page'>
        <SearchForm />
        <MoviesCardList>
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </MoviesCardList>
      </main>
      <Footer />
    </>
  );
};

export default MoviesPage;
