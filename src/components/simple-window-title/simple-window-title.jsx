import React from 'react';
import PropTypes from 'prop-types';
import './simple-window-title.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const SimpleWindowTitle = ({ title }) => {
  return (
    <div className='simple-window-title'>
      <Link to='/'>
        <img className='simple-window-title__logo' alt='Логотип сайта' src={logo} />
      </Link>
      <p className='simple-window-title__title'>{title}</p>
    </div>
  );
};
SimpleWindowTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SimpleWindowTitle;
