// import react from "react";
import mealsImg from '../../Assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";
import Styles from './Header.module.css';

function Header(props){
  return(
    <>
      <header className={Styles.header}>
        <h1>Foodiee</h1>
        <HeaderCartButton onClickCart={props.onShowCart}/>
      </header>
      <div className={Styles['main-image']}>
        <img src={mealsImg} alt='A table full of delicious food!'/>
      </div>
    </>
  )  
}

export default Header;