import React from 'react';
import './saved-movies-page.css';
import {
  Header, Footer, SearchForm, MoviesCardList, MoviesCard,
} from '../../components/index';

const SavedMoviesPage = () => {
  return (
    <>
      <Header />
      <main className='saved-movies-page'>
        <SearchForm />
        <MoviesCardList>
          <MoviesCard isDeletable />
          <MoviesCard isDeletable />
          <MoviesCard isDeletable />
          <MoviesCard isDeletable />
          <MoviesCard isDeletable />
        </MoviesCardList>
      </main>
      <Footer />
    </>
  );
};

export default SavedMoviesPage;
