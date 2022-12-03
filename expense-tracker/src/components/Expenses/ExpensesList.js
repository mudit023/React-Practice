import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

// This is a complete conditional component

function ExpensesList(props){
  if(props.data.length===0){
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
  }
  return (
    <ul className='expenses-list'>
  {/* Expense Generator According to the filter year
  This is a **Conditional Content** */}
      {props.data.map((expense) => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ))}
    </ul>
  )
}
export default ExpensesList;