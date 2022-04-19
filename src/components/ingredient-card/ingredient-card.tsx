import React, {FC} from "react";
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ingredient-card.module.css';
import {useDrag} from "react-dnd";
import {DND_TYPES} from "../../utils/constants";
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom"
import { TIngredientCard} from "../../types";

export const IngredientCard: FC<TIngredientCard> = ({ ingredient, onSelect }) => {
  const location = useLocation();

  const { image, price, name, quantity, _id } = ingredient;

  const [, dragRef] = useDrag({
    type: DND_TYPES.CARD_FROM_INGREDIENTS,
    item: ingredient,
  });

  return (
    <li
      className={styles.card}
      onClick={() => onSelect(ingredient)}
      ref={dragRef}
      data-test-id={_id}
    >
      <Link
        to={{ pathname: `/ingredients/${_id}`, state: { ingredientCard: location } }}
        className={styles.link}
      >
        <figure className={styles.card_container}>
          <img className="ml-4 mr-4" src={image} alt={name} />
          <figcaption className={styles.caption_container}>
            <div className={`${styles.price_container} mt-1 mb-1`}>
              <p className="text text_type_digits-default">{price}</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className={`text text_type_main-default ${styles.title}`}>{name}</p>
          </figcaption>
          {
            !!quantity && <Counter count={quantity} size="default" />
          }
        </figure>
      </Link>
    </li>
  );
};
