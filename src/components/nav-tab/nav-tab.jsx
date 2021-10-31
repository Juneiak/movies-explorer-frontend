import React from 'react';
import { Link } from 'react-router-dom';
import './nav-tab.css'
const NavTab = () => {
  return (
    <nav className='nav-tab'>
      <div className='nav-tab__content'>
        <ul className='nav-tab__list'>
          <li className='nav-tab__list-element'><Link to='#about' className='app__link app__link-animation nav-tab__link'/>О проекте</li>
          <li className='nav-tab__list-element'><Link to='#tech' className='app__link app__link-animation nav-tab__link'/>Технологии</li>
          <li className='nav-tab__list-element'><Link to='#student' className='app__link app__link-animation nav-tab__link'/>Студент</li>
        </ul>
      </div>
    </nav>
  )
};

export default NavTab;
