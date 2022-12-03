import React, { useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import Styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const [cartBtnActive, setCartBtnActive] = useState(false)

  const clickCartHandler = () => {
    props.onClickCart();
  };

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnStyles = `${Styles.button} ${cartBtnActive?Styles.bump:''}`

  useEffect(()=>{
    if(cartCtx.items.length===0){
      return;
    }
    setCartBtnActive(true);

    const timer = setInterval(()=>{
      setCartBtnActive(false);
    }, 300)

    return ()=>{
      clearTimeout(timer)
    }
  }, [cartCtx.items])

  return (
    <button className={btnStyles} onClick={clickCartHandler}>
      <span className={Styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
