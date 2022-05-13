import React, {FC} from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ModalOverlay} from "../modal-overlay/modal-overlay";
import {KEY} from "../../utils/constants";
import {TModal} from "../../types";

const modalRoot: HTMLElement = document.getElementById("react-modals")!;

export const Modal: FC<TModal> = ({ children, title, onClose }) => {
  function handleEscClose(e: KeyboardEvent) {
    if (e.key === KEY) {
      onClose();
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    }
  }, [handleEscClose]);

  return ReactDOM.createPortal(
    <div data-test={'modal'}>
      <div className={styles.container}>
        {
          !!title && (
            <div className={`${styles.title} mt-10 mr-10 ml-10`}>
              <h2 className={`text text_type_main-large`}>{title}</h2>
            </div>
          )
        }
        {children}
        <button
          className={`${styles.button} mr-10 mt-15`}
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
          data-test={'modal-close-btn'}
        >
          <CloseIcon type="primary" />
        </button>
      </div>
      <ModalOverlay onClose={onClose}/>

    </div>,
    modalRoot
  );
};