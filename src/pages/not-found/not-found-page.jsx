import React from 'react';
import { useHistory } from 'react-router-dom';
import './not-found-page.css';

const NotFoundPage = () => {

  const history = useHistory();
  const goBackHandle = () => {
    history.goBack();
  }

  return (
    <main className='not-found-page'>
      <h1 className='not-found-page__title'>404</h1>
      <p className='not-found-page__subtitile'>Страница не найдена</p>
      <button onClick={goBackHandle} type='button' className='not-found-page__back-button'>Назад</button>
    </main>
  );
};

export default NotFoundPage;
