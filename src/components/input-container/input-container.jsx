import React from 'react';
import './input-container.css';
import PropTypes from 'prop-types';

const InputContainer = ({
  inputName = 'emptyName',
  inputValue = '',
  inputType = 'text',
  inputPlaceholder = '',
  isRequired = false,
  inputOnChange = () => {},
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
        onChange={inputOnChange}
      />
      <span className='input-container__error'>errr</span>
    </div>
  );
};

InputContainer.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  isRequired: PropTypes.bool.isRequired,
  inputOnChange: PropTypes.func,
};

export default InputContainer;
