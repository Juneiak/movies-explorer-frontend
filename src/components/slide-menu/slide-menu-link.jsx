import React from 'react';
import './slide-menu-link.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const SlideMenuLink = ({ linkTo, linkName, onLinkClick }) => {

  return (
    <li className='slide-menu-link'>
      <NavLink
        to={linkTo}
        exact
        onClick={() => onLinkClick()}
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
