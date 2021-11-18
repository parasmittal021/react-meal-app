import { Fragment } from "react/cjs/react.production.min";
import classes from "./Model.module.css";
import ReactDOM from "react-dom";
const BackDrop = (props) => {
  return <div className={classes.backDrop} onClick={props.onHideCart}></div>;
};
const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Model = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onHideCart={props.onHideCart} />,
        document.getElementById("overlays")
      )
      }
      ,
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};
export default Model;
