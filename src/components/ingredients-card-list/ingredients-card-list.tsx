import React, {FC} from "react";
import {IngredientCard} from "../ingredient-card/ingredient-card";
import styles from "./ingredients-card-list.module.css";
import {TIngredientsCardList} from "../../types";

export const IngredientsCardList: FC<TIngredientsCardList> = ({ ingredients, onSelect }) => {
  return (
    <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-4`}>
      {
        ingredients.map((ingredient) => {
          const { _id } = ingredient;
          return (
            <IngredientCard ingredient={ingredient} key={_id} onSelect={onSelect}/>
          )
        })
      }
    </ul>
  );
};