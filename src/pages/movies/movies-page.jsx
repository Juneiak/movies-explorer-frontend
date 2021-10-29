import React from 'react';
import './movies-page.css';
import { Header, Footer, SearchForm, MoviesCardList } from '../../components/index';

const MoviesPage = () => {
  return (
    <>
      <Header />
      <main className='movies-page'>
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  )
};

export default MoviesPage;
