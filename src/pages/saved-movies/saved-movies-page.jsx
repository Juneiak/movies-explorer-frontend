import React from 'react';
import './saved-movies-page.css';
import {
  Header, Footer, SearchForm, MoviesCardList, MoviesCard, Preloader,
} from '../../components/index';
import { toFilter } from '../../utils/app-utils/app-utils';

const SavedMoviesPage = ({ getUserMoviesHandler }) => {

  const [filteredMovies, setFilterdMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const SearchHandler = (searchText, isShortFilm) => {
    setIsLoading(true);
    getUserMoviesHandler()
      .then((allSavedMovies) => {
        const filteredMovies = toFilter(allSavedMovies, {searchText, isShortFilm});
        setFilterdMovies(filteredMovies);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setIsLoading(false);
        setIsError(true);
      })
  }
  
  const deleteCardHandler = (movieId) => setFilterdMovies(filteredMovies.filter((movie) => movie.movieId !== movieId))

  React.useEffect(() => {
    SearchHandler('', false)
  }, []);

  return (
    <>
      <Header />
      <main className='movies-page'>
        <SearchForm onSearchButtonClick={SearchHandler} isSearched={!!filteredMovies.length} />
        {isError 
        ? <h2 className='movies-page__get-movies-error'>{errorMessage}</h2>
        : (isLoading 
        ? <Preloader />
        : 
        <MoviesCardList buttonStatus={false}>
          {filteredMovies.map((item, index) => (
            <MoviesCard deleteCardHandler={deleteCardHandler} cardData={item} key={item._id} isSavedMovieCard/>
          ))}
        </MoviesCardList>
        )
        }
      </main>
      <Footer />
    </>
  );
};

export default SavedMoviesPage;
