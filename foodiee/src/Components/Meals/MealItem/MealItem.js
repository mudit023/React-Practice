import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import Styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.mealName,
      amount: amount,
      price: props.mealPrice
    });
  };
  const price = `₹${props.mealPrice.toFixed(2)}`;
  return (
    <li className={Styles.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={Styles.description}>{props.mealDescription}</div>
        <div className={Styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
