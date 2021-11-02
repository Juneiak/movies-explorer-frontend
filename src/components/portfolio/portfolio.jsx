import React from 'react';
import './portfolio.css';
import PortfolioLink from '../portfolio-link/portfolio-link';

const Portfolio = () => {
  return (
    <section className='partfolio'>
      <div className='partfolio__content'>
        <h4 className='partfolio__partfolio-title'>Портфолио</h4>
        <ul className='partfolio__works-list'>
          <PortfolioLink linkTo='/' workName='Статичный сайт' />
          <PortfolioLink linkTo='/' workName='Адаптивный сайт' />
          <PortfolioLink linkTo='/' workName='Одностраничное приложение' />
        </ul>
      </div>
    </section>
  )
};

export default Portfolio;
