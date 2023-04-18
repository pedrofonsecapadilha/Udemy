import './ExpenseForm.css';
import React, { useState } from 'react';

function ExpenseForm(props) {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
/*   const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  }); */

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
/*     setUserInput ((prevState) => {
      return {...prevState, enteredTitle: event.target.value};
    }); */
  };
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
/*     setUserInput ((prevState) => {
      return {...prevState, enteredAmount: event.target.value};
    }); */
  };
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
/*     setUserInput ((prevState) => {
      return {...prevState, enteredDate: event.target.value};
    }); */
  };

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__controls'>
          <label className='new-expense__label'>Title</label>
          <input className='new-expense__input' type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className='new-expense__controls'>
          <label className='new-expense__label'>Amount</label>
          <input className='new-expense__input' type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}></input>
        </div>
        <div className='new-expense__controls'>
          <label className='new-expense__label'>Date</label>
          <input className='new-expense__input' type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
