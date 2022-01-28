import React from "react";
import IngredientCard from "../ingredient-card/ingredient-card";
import listStyles from "./ingredients-card-list.module.css";

export default function IngredientsCardList({array}) {
  return (
    <ul className={listStyles.list}>
      {
        array.map((ingredient) => {
          const { _id } = ingredient;
          return (
            <IngredientCard ingredient={ingredient} count={1} key={_id}/>
          )
        })
      }
    </ul>
  );
}