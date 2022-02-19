import React from "react";
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import cardStyles from './ingredient-card.module.css';
import PropTypes from 'prop-types';
import {ingredientPropTypes} from "../../utils/custom-prop-types";
import {useDrag} from "react-dnd";
import {DND_TYPES} from "../../utils/constants";

export default function IngredientCard({ ingredient, onSelect }) {
  const { image, price, name, quantity } = ingredient;
  const [, dragRef] = useDrag({
    type: DND_TYPES.CARD_FROM_INGREDIENTS,
    item: ingredient,
  });

  return (
    <li className={cardStyles.card} onClick={() => onSelect(ingredient)} ref={dragRef}>
      <figure className={cardStyles.card_container}>
        <img className="ml-4 mr-4" src={image} alt={name} />
        <figcaption className={cardStyles.caption_container}>
          <div className={`${cardStyles.price_container} mt-1 mb-1`}>
            <p className="text text_type_digits-default">{price}</p>
            <CurrencyIcon type="primary" />
          </div>
          <p className={`text text_type_main-default ${cardStyles.title}`}>{name}</p>
        </figcaption>
        {
          !!quantity && <Counter count={quantity} size="default" />
        }
      </figure>
    </li>
  );
}

IngredientCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
  onSelect: PropTypes.func.isRequired,
};