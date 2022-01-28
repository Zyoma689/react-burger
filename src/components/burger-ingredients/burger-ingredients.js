import React from "react";
import { CONSTRUCTOR_TITLES } from "../../utils/constants";
import IngredientsCardList from "../ingredients-card-list/ingredients-card-list";
import burgerIngredientsStyles from "./burger-ingredients.module.css"


export default function BurgerIngredients({ data }) {
  const bun = data.filter((ingredient) => ingredient.type === 'bun');
  const sauce = data.filter((ingredient) => ingredient.type === 'sauce');
  const main = data.filter((ingredient) => ingredient.type === 'main');

  return (
    <div className={`${burgerIngredientsStyles.container} custom-scroll`}>
      <p className="text text_type_main-medium">{CONSTRUCTOR_TITLES.BUN}</p>
      <IngredientsCardList ingredients={bun}/>
      <p className="text text_type_main-medium">{CONSTRUCTOR_TITLES.SAUCE}</p>
      <IngredientsCardList ingredients={sauce}/>
      <p className="text text_type_main-medium">{CONSTRUCTOR_TITLES.MAIN}</p>
      <IngredientsCardList ingredients={main}/>
    </div>
  );
}