import React from 'react';
import './input-container.css';
import PropTypes from 'prop-types';

const InputContainer = ({
  inputTitle = 'emptyName',
  inputValue = '',
  inputType = 'text',
  inputPlaceholder = '',
  isRequired = false,
  inputName,
  inputErrors,
  maxLength = '',
  minLength = '',
  isInputActive = true,
  inputOnChange = () => {},
}) => {
  return (
    <div className='input-container'>
      <span className='input-container__name'>{inputTitle}</span>
      <input
        className='input-container__input'
        value={inputValue}
        type={inputType}
        placeholder={inputPlaceholder}
        required={isRequired}
        onChange={inputOnChange}
        name={inputName}
        minLength={String(minLength)}
        maxLength={String(maxLength)}
        disabled={!isInputActive}
      />
      {inputErrors && <span className='input-container__error'>{inputErrors}</span>}
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
