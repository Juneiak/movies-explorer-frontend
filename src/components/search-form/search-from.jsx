import React from 'react';
import './search-from.css';
import finderImage from '../../images/search-icon.svg';
import FilterCheckBox from '../filter-check-box/filter-check-box';
import useWindowDimensions from './../../utils/customHooks/use-window-dimensions';

const SearchForm = () => {

  const { width } = useWindowDimensions();
  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <form className='search-form__form'>
          <fieldset className='search-form__text-input-container'>
            <img className='search-form__lupa' src={finderImage} alt='лупа для поиска'/>
            <div className='search-form__search-input'>
              <input className='search-form__text-input' required type='text' minLength='1' required placeholder='Фильм' />
              <span className='search-form__error'></span>
            </div>
            <button className='search-form__search-button'>Найти</button>
          </fieldset>
          {width > 600 &&
            <div className='search-form__checkbox-container'>
              <FilterCheckBox />
              <span className='search-form__checkbox-title'>Короткометражки</span>
            </div>
          }
        </form>
        {width < 600 &&
          <div className='search-form__checkbox-container'>
            <FilterCheckBox />
            <span className='search-form__checkbox-title'>Короткометражки</span>
          </div>
        }
      </div>
    </section>
  )
};

export default SearchForm;
