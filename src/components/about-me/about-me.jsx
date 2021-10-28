import React from 'react';
import avatar from '../../images/avatar.png';
import './about-me.css';

const AboutMe = () => {
  return (
    <section className='about-me'>
      <div className='about-me__content'>
        <h2 className='main-page__title'>Студент</h2>
        <div className='main-paage__about'>
          <div className='main-page__texts'>
            <p className='main-page__name'>Виталий</p>
            <p className='main-page__who'>Фронтенд-разработчик, 30 лет</p>
            <p className='main-page__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          </div>
          <ul className='main-page__link-list'>
            <li className='main-page__list-element'><a className='app__link main-page__link' href='https://ru-ru.facebook.com/' target='_blank'>Facebook</a></li>
            <li className='main-page__list-element'><a className='app__link main-page__' href='https://github.com/' target='_blank'>Github</a></li>
          </ul>
          <img src={avatar} className='main-page__avatar'></img>
        </div>
      </div>
      
    </section>
  )
};

export default AboutMe;
