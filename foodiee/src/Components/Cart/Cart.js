import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import Styles from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;
  const closeCartHandler = () => {
    props.onClose();
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount:1})
  };

  const cartItem = (
    <ul className={Styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClickModal={props.onClose}>
      {cartItem}
      <div className={Styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={Styles.actions}>
        <button className={Styles["button--alt"]} onClick={closeCartHandler}>
          Close
        </button>
        {hasItems && <button className={Styles.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
