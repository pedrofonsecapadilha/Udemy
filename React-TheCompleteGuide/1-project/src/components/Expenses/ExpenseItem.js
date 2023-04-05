import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  function clickHandler () {
    setTitle('Updated!');
  };

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <h2 className='expense-item__description'>{title}</h2>
      <div className='expense-item__price'>$ {props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
