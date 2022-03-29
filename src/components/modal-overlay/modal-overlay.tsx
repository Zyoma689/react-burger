import React, {FC} from "react";
import styles from "./modal-overlay.module.css";
import {TModalOverlay} from "../../types";

export const ModalOverlay: FC<TModalOverlay> = ({ onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose} />
  );
};