import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `Rs ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cardItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cardItemAddHandler = (item) => {
    cartCtx.addItem();
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cardItemRemoveHandler.bind(null, item.id)}
          onAdd={cardItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Model onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes["button "]}>Order</button>}
      </div>
    </Model>
  );
};
export default Cart;
