import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  

  // Using single state to update all the inputs

  // const [newInput, setNewInput] = useState({
  //   inputTitle: '',
  //   inputAmount: '',
  //   inputDate: ''
  // });

  // const titleChangeHandler = (e) => {
  //   setNewInput((prevState)=>{
  //         return { ...prevState, 
  //           inputTitle: e.target.value
  //         }
  //       });
  // };

  // const amountChangeHandler = (e) => {
  //   setNewInput((prevState)=>{
  //         return { ...prevState, 
  //           inputAmount: e.target.value
  //         }
  //       });
  // };

  // const dateChangeHandler = (e) => {
  //   setNewInput((prevState)=>{
  //         return { ...prevState, 
  //           inputDate: e.target.value
  //         }
  //       });
  // };

  const titleChangeHandler = (e) => {
    setInputTitle(e.target.value);
    // console.log(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setInputAmount(e.target.value);
    // console.log(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
    // console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newExpenseData = {
      title: inputTitle,
      amount: +inputAmount,
      date: new Date(inputDate)
    }
    props.onSaveNewExpense(newExpenseData);
    setInputTitle('');
    setInputAmount('');
    setInputDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={inputTitle}
            onChange={(e) => {
              titleChangeHandler(e);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={inputAmount}
            min="1"
            step="1"
            onChange={(e) => {
              amountChangeHandler(e);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={inputDate}
            min="2022-01-01"
            max="2023-12-31"
            onChange={(e) => {
              dateChangeHandler(e);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
