import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
const HeaderButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
  const { items } = cartCtx;

  const numberofItems = items.reduce((currNumber, items) => {
    return currNumber + items.amount;
  }, 0);

  useEffect(() => {
    setIsButtonHighlighted(true);
    const timer = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const buttonClasses = `${classes.button} ${
    isButtonHighlighted ? classes.bump : ""
  }`;
  return (
    <button className={buttonClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofItems}</span>
    </button>
  );
};

export default HeaderButton;
