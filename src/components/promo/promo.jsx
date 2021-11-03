import React from 'react';
import landingImage from '../../images/landing.svg';
import './promo.css';

const Promo = () => {
  return (
    <section className='promo'>
      <div className='promo__content'>
        <div className='promo__about'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a href='https://practicum.yandex.ru/' className='promo__more-link'>Узнать больше</a>
        </div>
        <img className='promo__landing-image' src={landingImage} alt='изображение планеты из слов' />
      </div>
    </section>
  );
};

export default Promo;
