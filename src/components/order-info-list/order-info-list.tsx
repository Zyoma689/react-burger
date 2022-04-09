import React, {FC} from "react";
import styles from "./order-info-list.module.css";
import {OrderInfoCard} from "../order-info-card/order-info-card";
import {TIngredient} from "../../types";

type TOrderInfoList = {
  ingredients: TIngredient[];
}

export const OrderInfoList: FC<TOrderInfoList> = ({ ingredients }) => {
  return (
    <ul className={`${styles.list} custom-scroll`}>
      {
        ingredients.map((ingredient, index) => (
          <OrderInfoCard ingredient={ingredient} index={index} key={ingredient._id}/>
        ))
      }
    </ul>
  );
};
 