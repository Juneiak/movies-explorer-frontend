import React from 'react';
import './movies-page.css';
import {
  Header, Footer, SearchForm, MoviesCardList, MoviesCard, Preloader,
} from '../../components/index';


const MoviesPage = ({getAllMoviesHandler}) => {
  const [filteredMovies, setFilterdMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [numberOfElements, setNumberOfElements] = React.useState(5);
  const [isMoreButtonActive, setIsMoreButtonActive] = React.useState(true);

  const SearchHandler = (searchParam) => {
    setIsLoading(true);
    getAllMoviesHandler()
      .then((allMovies) => {
        setFilterdMovies(allMovies.slice(0, 10))
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setIsLoading(false);
        setIsError(true);
      })
  }

  const moreHandler = () => {
    if (filteredMovies.length > numberOfElements) setNumberOfElements(numberOfElements + 3)
    if (numberOfElements >= filteredMovies.length) setIsMoreButtonActive(false);
  }

  React.useEffect(() => {
    SearchHandler();
  }, []);

  return (
    <>
      <Header />
      <main className='movies-page'>
        <SearchForm onSearchButtonClick={SearchHandler} />
        {isError 
        ? <h2 className='movies-page__get-movies-error'>{errorMessage}</h2>
        : (isLoading 
        ? <Preloader />
        : 
        <MoviesCardList onMoreButtonClick={moreHandler}  buttonStatus={isMoreButtonActive}>
          {filteredMovies.slice(0, numberOfElements).map((item, index) => (
            <MoviesCard item={item} key={item.id} />
          ))}
        </MoviesCardList>
        )
        }
      </main>
      <Footer />
    </>
  );
};

export default MoviesPage;
