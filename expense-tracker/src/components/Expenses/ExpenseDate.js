import './ExpenseDate.css';

function ExpenseDate(props) {
  const year = props.edate.getFullYear();
  const month = props.edate.toLocaleString("en-US", { month: "long" });
  const day = props.edate.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{year}</div>
      <div className='expense-date__year'>{month}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}
export default ExpenseDate;
