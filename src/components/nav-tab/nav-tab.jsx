import React from 'react';
import { Link } from 'react-router-dom';
import './nav-tab.css'
const NavTab = () => {
  return (
    <nav className='nav-tab'>
      <div className='nav-tab__content'>
        <ul className='nav-tab__list'>
          <li className='nav-tab__list-element'>
            <Link to='#about' className='nav-tab__link' >О проекте</Link>
          </li>
          <li className='nav-tab__list-element'>
            <Link to='#tech' className='nav-tab__link' >Технологии</Link>
          </li>
          <li className='nav-tab__list-element'>
            <Link to='#student' className='nav-tab__link' >Студент</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default NavTab;
