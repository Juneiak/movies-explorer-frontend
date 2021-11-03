import React from 'react';
import './account.css';
import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <Link to='/profile' className='account'>
      <p className='account__button-text'>Аккаунт</p>
      <div className='account__icon' />
    </Link>
  );
};

export default Account;
