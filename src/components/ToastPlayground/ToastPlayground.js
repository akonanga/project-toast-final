import React from "react";

import { ToastContext } from "../ToastProvider";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const {
    toasts,
    message,
    setMessage,
    variant,
    setVariant,
    isPopToast,
    handleDismiss,
    handleIsPopToast,
  } = React.useContext(ToastContext);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isPopToast && (
        <ToastShelf toasts={toasts} handleDismiss={handleDismiss} />
      )}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((item) => {
              return (
                <label htmlFor={`variant-${item}`} key={item}>
                  <input
                    id={`variant-${item}`}
                    type="radio"
                    name="variant"
                    value={item}
                    checked={variant === item}
                    onChange={(event) => {
                      setVariant(event.target.value);
                    }}
                  />
                  {item}
                </label>
              );
            })}
          </div>
        </div>

        <form className={styles.row} onSubmit={handleIsPopToast}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
