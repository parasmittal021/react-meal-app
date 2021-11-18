import { Fragment } from "react/cjs/react.production.min";
import mealsImage from "../../assets/meals.jpg"
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderButton onShowCart={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}> 
        <img src={mealsImage} alt="Meals"/>
      </div>
    </Fragment>
  );
};
export default Header;
