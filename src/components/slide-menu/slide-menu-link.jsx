import React from 'react';
import './slide-menu-link.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import SlideMenuContext from '../../contexts/slide-menu-context';

const SlideMenuLink = ({ linkTo, linkName, onLinkClick }) => {
  const setIsSlideMenuOpen = React.useContext(SlideMenuContext);

  const linkClickHandler = () => {
    onLinkClick();
  };

  return (
    <li className='slide-menu-link'>
      <NavLink
        to={linkTo}
        exact
        onClick={linkClickHandler}
        className='slide-menu-link__link'
        activeClassName='slide-menu-link__link_active'
      >
        {linkName}
      </NavLink>
    </li>
  );
};

SlideMenuLink.propTypes = {
  linkTo: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func,
};
export default SlideMenuLink;
