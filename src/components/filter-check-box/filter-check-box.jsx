import React from 'react';
import './filter-check-box.css';

const FilterCheckBox = ({ toggleFilter, isActive }) => {
  return (
    <label className='filter-check-box'>
      <input checked={isActive} onChange={toggleFilter} className='filter-check-box__input' type='checkbox' />
      <div className='filter-check-box__pseudo' />
      <div className='filter-check-box__dot' />
    </label>
  );
};

export default FilterCheckBox;
