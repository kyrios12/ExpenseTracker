import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useDateFormat from '../Custom Hooks/dateFormater';
import "../Styles/filter.css";

const Filter = (props) => {
  const { state, dispatch } = props;
  const [date, setDate] = useState('');
  const formattedDateStr = useDateFormat(date);

  const handleFilter = () => {
    let newArr = state.expenses.filter((expense) => {
      return expense.dateOfExpense === formattedDateStr;
    })
    dispatch({ type: 'FILTER_EXPENSES', payload: newArr })
  }

  const clearFilter = () => {
    setDate('');
    dispatch({ type: 'CLEAR_FILTER' })
  }

  return (
    <div className='filterContainer'>
      <Form.Control type='date' value={date} onChange={(e) => setDate(e.target.value)} />
      <Button variant="primary" onClick={handleFilter}>Filter By Date</Button>
      <Button variant="secondary" type='clear' onClick={clearFilter}>Clear</Button>
    </div>
  )
}

export default Filter;
