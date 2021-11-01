import React from 'react';
import './slide-menu-link.css';
import { NavLink } from 'react-router-dom';
import SlideMenuContext from '../../contexts/slide-menu-context';

const SlideMenuLink = ({ linkTo, linkName}) => {

  const setIsSlideMenuOpen = React.useContext(SlideMenuContext);

  const linkClickHandler = () => {
    setIsSlideMenuOpen(false);
  };

  return (
    <li className='slide-menu-link'>
      <NavLink
        to={linkTo}
        exact
        onClick={linkClickHandler}
        className='slide-menu-link__link' 
        activeClassName='slide-menu-link__link_active'>{linkName}
      </NavLink>
    </li>
  )
}

export default SlideMenuLink;
