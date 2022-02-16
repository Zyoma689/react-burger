import React from "react";
import ReactDOM from "react-dom";
import modalStyles from "./modal.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import {KEY} from "../../utils/constants";
import PropTypes from 'prop-types';

const modalRoot = document.getElementById("react-modals");

export default function Modal({ children, title, onClose }) {
  function handleEscClose(e) {
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
    <div className={`${modalStyles.modal}`}>
      <div className={modalStyles.container}>
        {
          !!title && (
            <div className={`${modalStyles.title} pt-10 ml-10 mr-10`}>
              <h2 className={`text text_type_main-large`}>{title}</h2>
            </div>
          )
        }
        {children}
        <button
          className={`${modalStyles.button} mr-10 mt-15`}
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        >
          <CloseIcon type="primary" />
        </button>
      </div>

      <ModalOverlay onClose={onClose}/>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};