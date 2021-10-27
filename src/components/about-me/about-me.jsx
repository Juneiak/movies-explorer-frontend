import React from 'react';
import avatar from '../../images/avatar.png';
import './about-me.css';

const AboutMe = () => {
  return (
    <section className='about-me'>
      <div className='about-me__content'>
        <h2 className='main-page__title'>Студент</h2>
        <div className='about-me__main'>
          <div className='about-me__description'>
            <div className='about-me__text'>
              <p className='about-me__name'>Виталий</p>
              <p className='about-me__who'>Фронтенд-разработчик, 30 лет</p>
              <p className='about-me__about'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
      и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            </div>
            <ul className='about-me__links'>
              <li className='about-me__list-elemnt'><a className='app__link about-me__link' href='https://ru-ru.facebook.com/' target='_blank'>Facebook</a></li>
              <li className='about-me__list-elemnt'><a className='app__link about-me__link' href='https://github.com/' target='_blank'>Github</a></li>
            </ul>
          </div>
          <img className='about-me__photo' src={avatar}></img>
        </div>
      </div>
      
    </section>
  )
};

export default AboutMe;
