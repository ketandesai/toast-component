import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider/ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const toastList = React.useContext(ToastContext);
  const handleRemoveToast = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toastList.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            id={toast.id}
            variant={toast.variant}
            handleRemoveToast={handleRemoveToast}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
