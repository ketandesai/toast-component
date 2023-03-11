import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  function removeToast(id) {
    let nextToastList = toastList.filter((toast) => toast.id !== id);
    setToastList(nextToastList);
  }

  function createToast(toast) {
    let nextToastList = [...toastList, toast];
    setToastList(nextToastList);
  }

  return (
    <ToastContext.Provider value={{ toastList, createToast, removeToast}}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
