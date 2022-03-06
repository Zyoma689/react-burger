import React from "react";
import { Link } from "react-router-dom";
import styles from "./not-found.module.css"
import {PATH} from "../../utils/constants";

export function NotFoundPage() {
  return (
    <main className={`${styles.main} mt-30`}>
      <h1 className="text text_type_digits-large mt-30">404</h1>
      <p className="text text_type_main-medium mt-5">Страница не найдена</p>
      <Link to={PATH.HOME} className={`${styles.link} mt-5`} >Вернуться на главную</Link>
    </main>
  );
}