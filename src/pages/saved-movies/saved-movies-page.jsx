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

  const SearchHandler = (searchText, isShortFilm) => {
    setIsLoading(true);
    getUserMoviesHandler()
      .then((allSavedMovies) => {
        const filteredMovies = toFilter(allSavedMovies, {searchText, isShortFilm});
        setFilterdMovies(filteredMovies);
        setIsLoading(false);
      })
      .catch((err) => {
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
      <main className='saved-movies-page'>
        <SearchForm onSearchButtonClick={SearchHandler} isSearched={!!filteredMovies.length} />
        {isError 
        ? <h2 className='saved-movies-page__get-movies-error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h2>
        : (isLoading 
          ? <Preloader />
          : (filteredMovies.length < 1
            ? <h2 className='saved-movies-page__nothing-found'>Ничего не найдено</h2>
            : 
            <MoviesCardList buttonStatus={false}>
              {filteredMovies.map((item) => (
                <MoviesCard deleteCardHandler={deleteCardHandler} cardData={item} key={item.movieId} isSavedMovieCard/>
              ))}
            </MoviesCardList>
            )
          )
        }
      </main>
      <Footer />
    </>
  );
};

export default SavedMoviesPage;
