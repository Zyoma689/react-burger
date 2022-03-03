import React from "react";
import NavBar from "../nav-bar/nav-bar";
import styles from "./app-header.module.css";

function AppHeader() {
  return (
    <header className={styles.header}>
      <NavBar/>
    </header>
  )
}

export default AppHeader;