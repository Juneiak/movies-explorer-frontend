import React from 'react';
import { Navigation, Account, Button } from '..';
import { Link, useRouteMatch } from 'react-router-dom';
import './header.css';
import useWindowDimensions from './../../utils/customHooks/use-window-dimensions';

const Header = () => {
  const isLogin = true;
  const { width } = useWindowDimensions();
  const {isExact: mainPageMatch} = useRouteMatch('/');

  const burgerClickHandler = () => {

  };

  const onSigninClick = () => {

  };

  return (
    <header className={`
    header
    ${mainPageMatch && 'header_position_main'}
    `}>
      <div className='header__content'>
        <Link className='header__logo-link' to='/' />
        {isLogin && width > 780 && <Navigation />}
        <div className='headar__menu'>
          {isLogin && width > 780 && <Account />}
          {isLogin && width < 780 && <button onClick={burgerClickHandler} className='header__burger'></button>}
          {!isLogin && 
            <div className='header__auth'>
              <Link to='/register' className='app__link header__link'>Регестрация</Link>
              <Button onClick={onSigninClick} size='small' form='basic' text='Войти' />
            </div>
          }
        </div>
      </div>
  
      
      


    </header>
  )
}

export default Header;
