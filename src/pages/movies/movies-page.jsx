import React from 'react';
import './movies-page.css';
import {
  Header, Footer, SearchForm, MoviesCardList, MoviesCard, Preloader,
} from '../../components/index';
import { toFilter } from '../../utils/app-utils/app-utils';

const MoviesPage = ({ getAllMoviesHandler }) => {

  const [filteredMovies, setFilterdMovies] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const [numberOfElements, setNumberOfElements] = React.useState(5);
  const [isMoreButtonActive, setIsMoreButtonActive] = React.useState(false);

  const SearchHandler = (searchText, isShortFilm) => {
    setIsLoading(true);
    getAllMoviesHandler()
      .then((allMovies) => {
        const filteredMovies = toFilter(allMovies, {searchText, isShortFilm});
        localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies))
        setFilterdMovies(filteredMovies);
        if (filteredMovies.length <= 5) setIsMoreButtonActive(false);
        else setIsMoreButtonActive(true);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      })
  }

  const moreHandler = () => {
    if (filteredMovies.length > numberOfElements) setNumberOfElements(numberOfElements + 5);
  }

  React.useEffect(() => {
    if (numberOfElements >= filteredMovies.length) setIsMoreButtonActive(false);
  }, [numberOfElements]);

  React.useEffect(() => {
    const savedFilteredMovies = JSON.parse(localStorage.getItem('filteredMovies'));
    if (savedFilteredMovies) {
      setFilterdMovies(savedFilteredMovies);
      if (savedFilteredMovies.length <= 5) setIsMoreButtonActive(false)
      else setIsMoreButtonActive(true)
    } 
  }, []);

  return (
    <>
      <Header />
      <main className='movies-page'>
        <SearchForm onSearchButtonClick={SearchHandler} isSearched={!!filteredMovies.length} />
        {isError 
        ? <h2 className='movies-page__get-movies-error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h2>
        : (isLoading 
          ? <Preloader />
          : (filteredMovies.length < 1
            ? <h2 className='movies-page__nothing-found'>Ничего не найдено</h2>
            : 
            <MoviesCardList onMoreButtonClick={moreHandler}  buttonStatus={isMoreButtonActive}>
              {filteredMovies.slice(0, numberOfElements).map((item) => (
                <MoviesCard cardData={item} key={item.movieId} />
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

export default MoviesPage;
