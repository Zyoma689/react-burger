import React from "react";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import listStyles from "./constructor-list.module.css"
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../utils/custom-prop-types";

export default function ConstructorList({ ingredients, onDelete }) {

  return (
    <div className={`${listStyles.container} custom-scroll pr-2`}>
      {
        ingredients.map((ingredient, i) => {
          const { name, price, image, _id } = ingredient;
          return (
            <li className={`${listStyles.item}`} key={_id + i}>
              <DragIcon type={"primary"} />
              <ConstructorElement text={name} thumbnail={image} price={price} handleClose={() => onDelete(_id)}/>
            </li>
          )
        })
      }
    </div>
  );
}

ConstructorList.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  onDelete: PropTypes.func.isRequired,
};

