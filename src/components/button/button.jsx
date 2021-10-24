import React from 'react';
import './button.css';

const Button = ({size, form, text=''}) => {
  // size = 'big'/'small'
  // form = 'basic'/'secondarry'
  return (
    <button
    className={`
    button
    ${form==='basic' && size==='small' && 'button_type_basic-small'}
    ${form==='basic' && size==='big' && 'button_type_basic-big'}
    ${form==='secondary' && 'button_type_secondary'}
    `}
    >{text}</button>
  )
};

export default Button;
