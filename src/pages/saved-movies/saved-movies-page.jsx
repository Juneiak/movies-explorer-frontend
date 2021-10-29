
  import React from 'react';
  import './saved-movies-page.css';
  import { Header, Footer, SearchForm, MoviesCardList } from '../../components/index';
  
  const SavedMoviesPage  = () => {
    return (
      <>
        <Header />
        <main className='saved-movies-page'>
          <SearchForm />
          <MoviesCardList isDeletable={true}/>
        </main>
        <Footer />
      </>
    )
  };
  
  export default SavedMoviesPage ;
  