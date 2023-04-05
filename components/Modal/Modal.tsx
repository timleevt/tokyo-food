import { ReactNode } from "react";
import styles from "./Modal.module.css";

type Modal = {
    children: ReactNode;
}
const Modal = ({children}:Modal) => {
  return <div className={styles.container}>
    {children}
  </div>;
};

export default Modal;
