import style from "./backdrop.module.css";

const Backdrop = ({
  visible,
  hideBackdrop,
}: {
  visible: boolean;
  hideBackdrop: Function;
}) =>
  visible ? (
    <i className={style.backdrop} onClick={() => hideBackdrop()}></i>
  ) : null;

export default Backdrop;
