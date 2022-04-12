import React, {FC} from "react";
import styles from "./ingredient-details.module.css";
import {useDispatch, useSelector} from "../../services/hooks";
import { useParams } from 'react-router-dom'
import {selectIngredientAction} from "../../services/actions/ingredient-details";
import {TIngredient} from "../../types";
import {NotFoundPage} from "../../pages";

export const IngredientDetails: FC = () => {
  const dispatch = useDispatch();

  const { selectedIngredient } = useSelector((state) => state.ingredientDetails);
  const { ingredients } = useSelector((state) => state.burgerIngredients);
  const { id } = useParams<{ id?: string }>();

  React.useEffect(() => {
    if (!selectedIngredient && id && ingredients) {
      const ingredient = ingredients.find((ingredient: TIngredient) => ingredient._id === id);
      if(ingredient) {
        dispatch(selectIngredientAction(ingredient));
      }
    }
  }, [selectedIngredient, id, ingredients, dispatch]);

  if (!selectedIngredient) {
    return (<NotFoundPage />);
  }

  const { image_large, name, calories, carbohydrates, fat, proteins } = selectedIngredient;

  return (
      <figure className={`${styles.container} mb-15`}>
        <img className={`${styles.image}`} src={image_large} alt={name} />
        <figcaption className={`${styles.caption} mt-4`}>
          <p className="text text_type_main-medium mb-8">{name}</p>
          <ul className={`${styles.table}`}>
            <li className={`${styles.item}`}>
              <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
            </li>
            <li className={`${styles.item}`}>
              <p className="text text_type_main-default text_color_inactive">Белки, г</p>
            </li>
            <li className={`${styles.item}`}>
              <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
            </li>
            <li className={`${styles.item}`}>
              <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
            </li>
            <li className={`${styles.item}`}>
              <p className="text text_type_digits-default text_color_inactive">{calories}</p>
            </li>
            <li className={`${styles.item}`}>
              <p className="text text_type_digits-default text_color_inactive">{proteins}</p>
            </li>
            <li className={`${styles.item}`}>
              <p className="text text_type_digits-default text_color_inactive">{fat}</p>
            </li>
            <li className={`${styles.item}`}>
              <p className="text text_type_digits-default text_color_inactive">{carbohydrates}</p>
            </li>
          </ul>
        </figcaption>
      </figure>
  );
};