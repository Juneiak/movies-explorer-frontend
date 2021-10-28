import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <p className='footer__author'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__misc'>
          <span className='footer__year'>&copy; 2021</span>
          <ul className='footer__links-list'>
            <li className='footer__list-element'><a href='https://practicum.yandex.ru/' target='_blank' className='app__link footer__link'>Яндекс.Практикум</a></li>
            <li className='footer__list-element'><a href='https://github.com/' target='_blank' className='app__link footer__link'>Github</a></li>
            <li className='footer__list-element'><a href='https://ru-ru.facebook.com/' target='_blank' className='app__link footer__link'>Facebook</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
