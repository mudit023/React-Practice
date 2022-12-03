import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  let id = 0;
  const newExpenseHandler = newExpenseData => {
    const expenseData = {
      ...newExpenseData,
      ID: id++
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }
  const startEditHandler = () => {
    setIsEditing(true);
  }
  const cancelEditHandler = () => {
    setIsEditing(false);
  }
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveNewExpense={newExpenseHandler} onCancel={cancelEditHandler}/>}
    </div>
  )
}

export default NewExpense