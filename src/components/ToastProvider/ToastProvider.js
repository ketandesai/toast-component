import React from "react";

export const ToastContext = React.createContext();

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toastList, setToastList] = React.useState([]);

  function removeToast(id) {
    let nextToastList = toastList.filter((toast) => toast.id !== id);
    setToastList(nextToastList);
  }

  function createToast(event) {
    event.preventDefault();
    const toast = {
      id: crypto.randomUUID(),
      message: message,
      variant: variant,
    };
    let nextToastList = [...toastList, toast];
    setToastList(nextToastList);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <ToastContext.Provider value={{ createToast, removeToast, toastList, setMessage, setVariant }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
