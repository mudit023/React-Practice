import Styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={Styles.backdrop} onClick={props.onClickBackdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={Styles.modal}>
      <div>{props.children}</div>
    </div>
  );
};

function Modal(props) {
  const portalTarget = document.getElementById('overlays')
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClickBackdrop={props.onClickModal}/>, portalTarget)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalTarget)}
    </>
  );
}
export default Modal;
