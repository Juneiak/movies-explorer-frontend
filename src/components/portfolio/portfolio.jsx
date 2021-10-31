import React from 'react';
import './portfolio.css';
import { PortfolioLink } from '../index';

const Portfolio = () => {
  return (
    <section className='partfolio'>
      <div className='partfolio__content'>
        <h4 className='partfolio__partfolio-title'>Портфолио</h4>
        <ul className='partfolio__works-list'>
          <PortfolioLink to='' workName='Статичный сайт' />
          <PortfolioLink to='' workName='Адаптивный сайт' />
          <PortfolioLink to='' workName='Одностраничное приложение' />
        </ul>
      </div>
    </section>
  )
};

export default Portfolio;
