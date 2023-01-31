import { Fragment, ReactNode } from "react";
import Backdrop from "../backdrop/backdrop";
import styles from "./modal.module.css";

const modalClasses = [styles.modal, styles.hideModal];
export function Modal({
  visible,
  closeModal,
  children,
}: {
  visible: boolean;
  closeModal: Function;
  children: ReactNode;
}) {
  visible ? modalClasses.pop() : null;
  return (
    <Fragment>
      <Backdrop visible hideBackdrop={closeModal} />
      <section className={modalClasses.join(" ")}>{children}</section>
    </Fragment>
  );
}
