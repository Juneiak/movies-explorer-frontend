import React from 'react';
import { Header } from '../../components/index';
import './profile-page.css';

const ProfilePage = () => {
  return (
    <>
    <Header />
    <main className='profile-page'>
      <section className='profile-page__content'>
        <h1 className='profile-page__title'>Привет, Виталий!</h1>
        <div className='profile-page__values'>
          <div className='profile-page__value-container'>
            <span className='profile-page__var'>Имя</span>
            <p className='profile-page__value'>Виталий</p>
          </div>
          <div className='profile-page__value-container'>
            <span className='profile-page__var'>E-mail</span>
            <p className='profile-page__value'>pochta@yandex.ru</p>
          </div>
        </div>
        <div className='profile-page__buttons'>
          <button className='app__link app__link-animation profile-page__button profile-page__button_edit'>Редактировать</button>
          <button className='app__link app__link-animation profile-page__button profile-page__button_signout'>Выйти из аккаунта</button>
        </div>
      </section>
    </main>
    </>
  )
};

export default ProfilePage;
