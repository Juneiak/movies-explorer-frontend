import React from 'react';
import './techs.css';

const Techs = () => {
  return (
    <section id='techs' className='techs'>
      <div className='techs__content'>
        <h2 className='main-page__title'>Технологии</h2>
        <div className='techs__about'>
          <p className='techs__text-title'>7 технологий</p>
          <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className='techs__techs-list'>
            <li className='techs__list-element'>HTML</li>
            <li className='techs__list-element'>CSS</li>
            <li className='techs__list-element'>JS</li>
            <li className='techs__list-element'>React</li>
            <li className='techs__list-element'>Git</li>
            <li className='techs__list-element'>Express.js</li>
            <li className='techs__list-element'>mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default Techs;
