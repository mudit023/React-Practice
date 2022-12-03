import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const optionClickHandler = (e) => {
    e.preventDefault();
    props.onFilter(e.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={optionClickHandler}>
          <option value='2023' >2023</option>
          <option value='2022' >2022</option>
          <option value='2021' >2021</option>
          <option value='2020' >2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;