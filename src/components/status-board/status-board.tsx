import React, {FC} from "react";
import styles from "./status-board.module.css";
import {StatusBoardList} from "../status-board-list/status-board-list";
import {ORDER_TEST} from "../../utils/constants";

export const StatusBoard: FC = () => {
  const { total, totalToday } = ORDER_TEST;

  return (
    <section className={styles.board}>
      <div className={styles.stats}>
        <p className={"text text_type_main-medium"}>Готовы:</p>
        <p className={"text text_type_main-medium"}>В работе:</p>
        <StatusBoardList done={true} />
        <StatusBoardList/>
      </div>
      <div>
        <p className={"text text_type_main-medium mt-15"}>Выполнено за все время:</p>
        <p className={`${styles.shadow} text text_type_digits-large`}>{total.toLocaleString('ru')}</p>
        <p className={"text text_type_main-medium mt-15"}>Выполнено за сегодня:</p>
        <p className={`${styles.shadow} text text_type_digits-large`}>{totalToday.toLocaleString('ru')}</p>
      </div>
    </section>
  );
};