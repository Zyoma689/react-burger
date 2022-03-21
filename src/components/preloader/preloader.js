import React from "react";
import styles from "./preloader.module.css";

export default function Preloader() {
  return (
    <div className={styles.overlay}>
      <div className={styles.preloader}>
        <div className={styles.preloader__container}>
          <span className={styles.preloader__round}/>
        </div>
      </div>
    </div>
  );
}