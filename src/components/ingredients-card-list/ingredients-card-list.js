import React from "react";
import IngredientCard from "../ingredient-card/ingredient-card";
import listStyles from "./ingredients-card-list.module.css";
import PropTypes from 'prop-types';
import {ingredientPropTypes} from "../../utils/custom-prop-types";

export default function IngredientsCardList({ ingredients, onSelect }) {
  return (
    <ul className={`${listStyles.list} mt-6 mb-10 ml-4 mr-4`}>
      {
        ingredients.map((ingredient) => {
          const { _id } = ingredient;
          return (
            <IngredientCard ingredient={ingredient} count={1} key={_id} onSelect={onSelect}/>
          )
        })
      }
    </ul>
  );
}

IngredientsCardList.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  onSelect: PropTypes.func.isRequired,
};