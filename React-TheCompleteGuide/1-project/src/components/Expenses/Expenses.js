import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from 'react';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}>
        </ExpensesFilter>

        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}>
          </ExpenseItem>
        ))};

      </Card>
    </div>
  );
}

export default Expenses;
