import React, {FC} from "react";
import {TIngredient} from "../../types";
import styles from "./ingredient-preview-icon.module.css";

export type TIngredientPreview = {
  ingredient: TIngredient;
  index: number;
  rest: number;
}

export const IngredientPreviewIcon: FC<TIngredientPreview> = ({ ingredient, index, rest }) => {
  const { image_mobile, name } = ingredient;
  return (
    <li className={styles.container} style={{ zIndex: 6 - index }}>
      <img className={styles.image} src={image_mobile} alt={name} />
      {
        !!rest && index === 5 && (
          <p className={`${styles.overlay} text text_type_main-default`}>{`+${rest}`}</p>
        )
      }
    </li>

  );
};
