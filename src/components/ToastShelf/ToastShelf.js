import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant }, index) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast
              variant={variant}
              handleDismiss={() => {
                handleDismiss(id);
              }}
            >
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
