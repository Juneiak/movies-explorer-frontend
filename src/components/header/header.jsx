import React from 'react';
import { Navigation, Account, Button } from '..';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const isLogin = true;

  return (
    <header className='header'>
      
      <Link className='header__logo-link' to='/' />
      {isLogin && <Navigation />}
      {isLogin && <Account />}
      {!isLogin && 
        <div className='header__auth'>
          <Link className='page__link header__link'>Регестрация</Link>
          <Button size='small' form='basic' />
        </div>
      }


    </header>
  )
}

export default Header;
