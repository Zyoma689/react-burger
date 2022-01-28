import React from "react";
import IngredientCard from "../ingredient-card/ingredient-card";
import listStyles from "./ingredients-card-list.module.css";

export default function IngredientsCardList({ ingredients }) {
  return (
    <ul className={`${listStyles.list} mt-6 mb-10 ml-4 mr-4`}>
      {
        ingredients.map((ingredient) => {
          const { _id } = ingredient;
          return (
            <IngredientCard ingredient={ingredient} count={1} key={_id}/>
          )
        })
      }
    </ul>
  );
}