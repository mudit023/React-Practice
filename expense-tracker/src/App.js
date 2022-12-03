import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    date: new Date(2022, 9, 2),
    title: "Car Insurance",
    amount: 1294,
  },
  {
    id: "e2",
    date: new Date(2022, 9, 3),
    title: "Dine Out",
    amount: 994,
  },
  {
    id: "e3",
    date: new Date(2023, 9, 4),
    title: "Macbook",
    amount: 199999,
  },
  {
    id: "e4",
    date: new Date(2021, 9, 5),
    title: "Shopping",
    amount: 5000,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses]);
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
