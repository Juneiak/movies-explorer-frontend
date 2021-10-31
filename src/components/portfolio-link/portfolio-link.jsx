import React from 'react';
import arrowIcon from '../../images/arrow.svg';
import { Link } from 'react-router-dom';
import './portfolio-link.css';

const PortfolioLink = ({ linkTo, workName }) => {
  return (
    <li className='partfolio-link'>
      <Link className='partfolio-link__link' to={linkTo}>
        <p className='partfolio-link__work-name'>{workName}</p>
        <img className='partfolio-link__arrow-image' alt='иконка стрелки' src={arrowIcon}></img>
      </Link>
    </li>
  )
}

export default PortfolioLink;
