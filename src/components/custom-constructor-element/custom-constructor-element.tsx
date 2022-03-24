import React, {FC} from "react";
import styles from "./custom-constructor-element.module.css";
import {BUN_TYPE} from "../../utils/constants";
import {TCustomConstructorElement} from "../../types";

export const CustomConstructorElement: FC<TCustomConstructorElement> = ({ type, children }) => {
  const classNames = `${styles.card} ${type ? type === BUN_TYPE.TOP ? styles.card_top : styles.card_bottom : ''}`;

  return (
    <div className={classNames}>
      <p className="text text_type_main-default text_color_inactive">{children}</p>
    </div>
  )
};

