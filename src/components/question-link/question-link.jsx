import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './question-link.css';

const QuestionLink = ({ question, linkText, linkTo }) => {
  return (
    <div className='question-link'>
      <p className='question-link__question'>{question}</p>
      <Link className='app__link app__link-animation question-link__link' to={linkTo}>{linkText}</Link>
    </div>
  );
};

QuestionLink.propTypes = {
  question: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default QuestionLink;
