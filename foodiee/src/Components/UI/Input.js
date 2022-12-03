import React from "react";
import Styles from "./Input.module.css";


const Input = React.forwardRef((props, ref) => {
  return (
    <div className={Styles.input}>
      <label htmlFor={props.input.id}>{props.labelName}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
}) 

export default Input;
