import React from 'react';
import './button.css';

const Button = ({size, text='', onButtonClick, buttonType='submit'}) => {
  // size = 'big'/'small'
  return (
    <button
      className={`
      button
      ${size==='small' ? 'button_type_basic-small' : 'button_type_basic-big'}
      `}
      onClick={onButtonClick}
      type={buttonType}
    >{text}</button>
  )
};

export default Button;
