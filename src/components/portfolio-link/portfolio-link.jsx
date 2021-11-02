import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import arrowIcon from '../../images/arrow.svg';
import './portfolio-link.css';

const PortfolioLink = ({ linkTo, workName }) => {
  return (
    <li className='partfolio-link'>
      <Link className='partfolio-link__link' to={linkTo}>
        <p className='partfolio-link__work-name'>{workName}</p>
        <img className='partfolio-link__arrow-image' alt='иконка стрелки' src={arrowIcon} />
      </Link>
    </li>
  );
};

PortfolioLink.propTypes = {
  linkTo: PropTypes.string.isRequired,
  workName: PropTypes.string.isRequired,
};

export default PortfolioLink;
