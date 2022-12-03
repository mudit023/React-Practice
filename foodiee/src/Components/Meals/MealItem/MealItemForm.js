import React,{useRef, useState} from "react";
import Styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

function MealItemForm(props) {
  const [amountValid, setAmountValid] = useState(true)
  const amountRef = useRef()

  const submitHandler = (e)=>{
    e.preventDefault()
    const enteredValue = amountRef.current.value;
    const enteredAmount = +enteredValue;

    if(enteredAmount===0||enteredAmount<1 || enteredAmount>5){
      setAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmount)
  }

  return (
    <form className={Styles.form} onSubmit={submitHandler}>
      <Input
        ref = {amountRef}
        labelName="Amount"
        input={{
          id: `counter_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountValid && <p>Select a valid amount(1-5)</p>}
    </form>
  );
}

export default MealItemForm;
