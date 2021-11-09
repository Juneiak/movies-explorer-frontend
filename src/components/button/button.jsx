import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

const Button = ({
  size,
  text = '',
  onButtonClick,
  buttonType = 'button',
  active=false
}) => {
  // size = 'big'/'small'
  return (
    <button
      className={`
      button
      ${size === 'small' ? 'button_type_basic-small' : 'button_type_basic-big'}
      ${active && 'button_active'}
      `}
      onClick={onButtonClick}
      type={buttonType}
      disabled={!active}
    >
      {text}
    </button>
  );
};
Button.propTypes = {
  size: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
  buttonType: PropTypes.string.isRequired,
};
export default Button;
