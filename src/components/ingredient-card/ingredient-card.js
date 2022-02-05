import React from "react";
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import cardStyles from './ingredient-card.module.css';
import PropTypes from 'prop-types';
import {ingredientPropTypes} from "../../utils/custom-prop-types";

export default function IngredientCard({ ingredient, count, onSelect }) {
  const { image, price, name } = ingredient;

  return (
    <li className={cardStyles.card} onClick={() => onSelect(ingredient)}>
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
          !!count && <Counter count={count} size="default" />
        }
      </figure>
    </li>
  );
}

IngredientCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
  count: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};