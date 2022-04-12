import React, {FC} from "react";
import {IngredientDetails} from "../../components/ingredient-details/ingredient-details";
import styles from "./ingredient-details.module.css";

export const IngredientDetailsPage: FC = () => {
  return (
    <main className={`${styles.main} mt-30`}>
      <p className={`text text_type_main-large`}>Детали ингредиента</p>
      <IngredientDetails />
    </main>
  )
};