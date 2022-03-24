import React, {FC} from "react";
import {NavBar} from "../nav-bar/nav-bar";
import styles from "./app-header.module.css";

export const AppHeader: FC = () => {
  return (
    <header className={styles.header}>
      <NavBar/>
    </header>
  )
};