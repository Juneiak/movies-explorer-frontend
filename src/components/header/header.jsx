import React from 'react';
import { Navigation, Account, Button } from '..';
import { Link } from 'react-router-dom';
import './header.css';
import useWindowDimensions from './../../utils/customHooks/use-window-dimensions';

const Header = () => {
  const isLogin = false;
  const { width } = useWindowDimensions();
  return (
    <header className='header'>
      
      <Link className='header__logo-link' to='/' />
      {isLogin && width > 780 && <Navigation />}
      <div className='headar__menu'>
        {isLogin && width > 780 && <Account />}
        {isLogin && width < 780 && <button className='header__burger'></button>}
        {!isLogin && 
          <div className='header__auth'>
            <Link className='page__link header__link'>Регестрация</Link>
            <Button size='small' form='basic' text='Войти' />
          </div>
        }
      </div>
      
      


    </header>
  )
}

export default Header;
