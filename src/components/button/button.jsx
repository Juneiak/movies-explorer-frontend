import React from 'react';
import './button.css';

const Button = ({size, text=''}) => {
  // size = 'big'/'small'
  return (
    <button
      className={`
      button
      ${size==='small' ? 'button_type_basic-small' : 'button_type_basic-big'}
      `}
    >{text}</button>
  )
};

export default Button;
