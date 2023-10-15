import React from "react";

export const ToastContext = React.createContext();

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [isPopToast, setIsPopToast] = React.useState(false);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        setToasts([]);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleDismiss(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  }

  function handleIsPopToast(evt) {
    evt.preventDefault();
    if (message.length === 0) {
      return;
    }
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];
    setToasts(nextToasts);
    setIsPopToast(true);
  }
  return (
    <ToastContext.Provider
      value={{
        toasts,
        message,
        setMessage,
        variant,
        setVariant,
        isPopToast,
        handleDismiss,
        handleIsPopToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
