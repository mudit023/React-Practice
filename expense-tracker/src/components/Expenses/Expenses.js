import React, { useState } from "react";
import "./Expenses.css";
// import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

function Expenses(props) {
  const [filteredYear, setFilter] = useState("2022");
  const addFilterHandler = (filterYear) => {
    setFilter(filterYear);
  };
  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilter={addFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList data={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
