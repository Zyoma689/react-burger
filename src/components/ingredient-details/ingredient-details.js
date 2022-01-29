import React from "react";
import ingredientDetailsStyles from "./ingredient-details.module.css";


export default function IngredientDetails({ ingredient }) {
  const { image_large, name, calories, carbohydrates, fat, proteins } = ingredient;

  return (
    <figure className={`${ingredientDetailsStyles.container}`}>
      <img className={`${ingredientDetailsStyles.image}`} src={image_large} alt={name} />
      <figcaption className={`${ingredientDetailsStyles.caption} mt-4`}>
        <p className="text text_type_main-medium mb-8">{name}</p>
        <ul className={`${ingredientDetailsStyles.table}`}>
          <li className={`${ingredientDetailsStyles.item}`}>
            <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          </li>
          <li className={`${ingredientDetailsStyles.item}`}>
            <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          </li>
          <li className={`${ingredientDetailsStyles.item}`}>
            <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          </li>
          <li className={`${ingredientDetailsStyles.item}`}>
            <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          </li>
          <li className={`${ingredientDetailsStyles.item}`}>
            <p className="text text_type_digits-default text_color_inactive">{calories}</p>
          </li>
          <li className={`${ingredientDetailsStyles.item}`}>
            <p className="text text_type_digits-default text_color_inactive">{proteins}</p>
          </li>
          <li className={`${ingredientDetailsStyles.item}`}>
            <p className="text text_type_digits-default text_color_inactive">{fat}</p>
          </li>
          <li className={`${ingredientDetailsStyles.item}`}>
            <p className="text text_type_digits-default text_color_inactive">{carbohydrates}</p>
          </li>
        </ul>
      </figcaption>
    </figure>
  )
}
