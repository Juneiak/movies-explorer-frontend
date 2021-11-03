import React from 'react';
import './nav-tab.css';

const NavTab = () => {
  return (
    <nav className='nav-tab'>
      <div className='nav-tab__content'>
        <ul className='nav-tab__list'>
          <li className='nav-tab__list-element'>
            <a href='#about' className='nav-tab__link'>О проекте</a>
          </li>
          <li className='nav-tab__list-element'>
            <a href='#techs' className='nav-tab__link'>Технологии</a>
          </li>
          <li className='nav-tab__list-element'>
            <a href='#student' className='nav-tab__link'>Студент</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavTab;
