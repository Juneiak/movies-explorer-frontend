import React from 'react';
import './simple-window-title.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const SimpleWindowTitle = ({ title }) => {
  return (
    <div className='simple-window-title'>
      <Link to='/'>
        <img className='simple-window-title__logo' alt='Логотип сайта' src={logo} />
      </Link>
      <p className='simple-window-title__title'>{title}</p>
    </div>
  )
}

export default SimpleWindowTitle;