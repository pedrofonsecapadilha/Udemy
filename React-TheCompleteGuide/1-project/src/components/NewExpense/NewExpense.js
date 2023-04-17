import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React, { useState } from 'react';

function NewExpense(props) {

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  }
  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  function SaveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  return (
  <div className='new-expense'>
    {!isEditing && <button onClick={startEditingHandler} className='beautiful'>Add New Expense</button>}
    {isEditing && <ExpenseForm
                    onSaveExpenseData={SaveExpenseDataHandler}
                    onCancel={stopEditingHandler}>
                  </ExpenseForm>}
  </div>
  );
};

export default NewExpense;
