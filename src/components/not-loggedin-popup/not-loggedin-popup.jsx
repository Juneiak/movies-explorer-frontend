import React from 'react';
import './not-loggedin-popup.css';
import Button from '../button/button';
import { useHistory } from 'react-router-dom';
import { PopupsContext } from '../../contexts';
import reactDOM from 'react-dom';

const popupsRoot = document.querySelector('#popupsRoot')

const NotLoggedInPopup = () => {
  const history = useHistory();
  const { setIsNotLoggedInPopupOpen } = React.useContext(PopupsContext);

  const onSigninClick = () => {
    setIsNotLoggedInPopupOpen(false)
    history.push(('/signin'))
  }
  return reactDOM.createPortal((
    <section className='not-loggedin-popup'>
      <div className="not-loggedin-popup__container">
        <button onClick={() => setIsNotLoggedInPopupOpen(false)} type='button' className='not-loggedin-popup__close-button'></button>
        <div className="not-loggedin-popup__content">
          <span className="not-loggedin-popup__message">Вы не авторизованы для выполнения данного действия</span>
          <Button active={true} text='Войти' onButtonClick={onSigninClick} size='big' />
        </div>
      </div>
    </section>
  ), popupsRoot)
};

export default NotLoggedInPopup;
