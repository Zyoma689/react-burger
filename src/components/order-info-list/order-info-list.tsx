import React, {FC} from "react";
import styles from "./order-info-list.module.css";
import {useSelector} from "../../services/hooks";
import {IngredientPreviewIcon} from "../ingredient-preview-icon/ingredient-preview-icon";
import {OrderInfoCard} from "../order-info-card/order-info-card";

export const OrderInfoList: FC = () => {
  const ingredientsData = useSelector((state) => state.burgerIngredients.ingredients);
  
  return (
    <ul className={`${styles.list} custom-scroll`}>
      {
        ingredientsData.map((ingredient, index) => (
          <OrderInfoCard ingredient={ingredient} index={index} key={ingredient._id}/>
        ))
      }
    </ul>
  );
};
 