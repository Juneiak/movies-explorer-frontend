import React from 'react';
import { Header, Footer } from '../../components/index'
import './not-found-page.css';

const NotFoundPage = () => {
  return (
      <main className='not-found-page'>
        <h1 className='not-found-page__title'>404</h1>
        <p className='not-found-page__subtitile'>Страница не найдена</p>
        <button className='not-found-page__back-button'>Назад</button>
      </main>
  )
};

export default NotFoundPage;
