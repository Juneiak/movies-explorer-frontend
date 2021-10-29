import React from 'react';
import './portfolio.css';
import arrowIcon from '../../images/arrow.svg';

const Portfolio = () => {
  return (
    <section className='partfolio'>
      <div className='partfolio__content'>
        <h4 className='partfolio__partfolio-title'>Портфолио</h4>
        <ul className='partfolio__works-list'>
          <li className='partfolio__list-element'>
            <p className='partfolio__work-name'>Статичный сайт</p>
            <img className='partfolio__arrow-image' alt='иконка стрелки' src={arrowIcon}></img>
          </li>
          <li className='partfolio__list-element'>
            <p className='partfolio__work-name'>Адаптивный сайт</p>
            <img className='partfolio__arrow-image' alt='иконка стрелки' src={arrowIcon}></img>
          </li>
          <li className='partfolio__list-element'>
            <p className='partfolio__work-name'>Одностраничное приложение</p>
            <img className='partfolio__arrow-image' alt='иконка стрелки' src={arrowIcon}></img>
          </li>
        </ul>
      </div>
    </section>
  )
};

export default Portfolio;
