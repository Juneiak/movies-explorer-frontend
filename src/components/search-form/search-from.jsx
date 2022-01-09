import React from 'react';
import './search-from.css';
import finderImage from '../../images/search-icon.svg';
import FilterCheckBox from '../filter-check-box/filter-check-box';
import useWindowDimensions from '../../utils/custom-hooks/use-window-dimensions';

const SearchForm = ({ onSearchButtonClick, isSearched }) => {
  const { width } = useWindowDimensions();
  const [ searchText, setSearchText ] = React.useState('');
  const [ isShortFilm, setIsShortFilm ] = React.useState(false);

  const handleTextChange = (evt) => setSearchText(evt.target.value);
  
  const handleSearch = () => {
    onSearchButtonClick(searchText, isShortFilm);
  }

  const shortFilmSearchHandler = () => {
    setIsShortFilm(!isShortFilm);
    if (isSearched) onSearchButtonClick(searchText, !isShortFilm);
  }
  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <form className='search-form__form'>
          <fieldset className='search-form__text-input-container'>
            <img className='search-form__lupa' src={finderImage} alt='лупа для поиска' />
            <div className='search-form__search-input'>
              <input
                onChange={handleTextChange}
                className='search-form__text-input'
                value={searchText}
                type='text'
                minLength='1'
                required
                placeholder='Фильм'
              />
              <span className='search-form__error' />
            </div>
            <button type='button' onClick={handleSearch} className='search-form__search-button'>Найти</button>
          </fieldset>
          {width > 600
            && (
            <div className='search-form__checkbox-container'>
              <FilterCheckBox isActive={isShortFilm} toggleFilter={shortFilmSearchHandler}/>
              <span className='search-form__checkbox-title'>Короткометражки</span>
            </div>
            )}
        </form>
        {width < 600
          && (
          <div className='search-form__checkbox-container'>
            <FilterCheckBox isActive={isShortFilm} toggleFilter={shortFilmSearchHandler}/>
            <span className='search-form__checkbox-title'>Короткометражки</span>
          </div>
          )}
      </div>
    </section>
  );
};

export default SearchForm;
