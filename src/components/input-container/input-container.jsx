import React from 'react';
import './input-container.css';

const InputContainer = ({
  inputName='emptyName',
  inputValue='',
  inputType='text',
  inputPlaceholder='',
  isRequired=false
}) => {
  return (
    <div className='input-container'>
      <span className='input-container__name'>{inputName}</span>
      <input
        className='input-container__input' // input-container__input_error
        value={inputValue}
        type={inputType}
        placeholder={inputPlaceholder}
        required={isRequired} 
      />
      <span className='input-container__error'>errr</span>
    </div>
  )
}

export default InputContainer;