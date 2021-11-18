import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { useRef, useState } from "react";
const MealItemForm = (props) => {
  const inputAmountRef = useRef();
  const [amountIsvalid, setAmountIsvalid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputAmountRef.current.value;
    if (enteredAmount.trim().length === 0 || enteredAmount < 1) {
      setAmountIsvalid(false);
      return;
    }
    setAmountIsvalid(true);
    const enteredAmountNumber = parseInt(enteredAmount);
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputAmountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsvalid && <p>Please enter a valid amount.</p>}
    </form>
  );
};

export default MealItemForm;
