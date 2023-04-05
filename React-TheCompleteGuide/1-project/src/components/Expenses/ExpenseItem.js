import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
// import Card from '../UI/Card';

function ExpenseItem(props) {
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <h2 className='expense-item__description'>{props.title}</h2>
      <div className='expense-item__price'>$ {props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
