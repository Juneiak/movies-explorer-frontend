import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__links-list'>
        <NavLink to='/movies' className='page__link navigation__link' activeClassName='page__link_active'>Фильмы</NavLink>
        <NavLink to='/saved-movies' className='page__link navigation__link' activeClassName='page__link_active'>Сохранённые фильмы</NavLink>
      </ul>
    </nav>
  )
};

export default Navigation;
