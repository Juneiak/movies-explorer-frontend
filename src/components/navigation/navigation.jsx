import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__links-list'>
        <li className='navigation__list-element'><NavLink to='/movies' className='app__link navigation__link' activeClassName='page__link_active'>Фильмы</NavLink></li>
        <li className='navigation__list-element'><NavLink to='/saved-movies' className='app__link navigation__link' activeClassName='page__link_active'>Сохранённые фильмы</NavLink></li>
      </ul>
    </nav>
  )
};

export default Navigation;
