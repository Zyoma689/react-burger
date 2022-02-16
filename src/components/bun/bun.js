import React from "react";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {BUN_TYPE} from "../../utils/constants";
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../utils/custom-prop-types";

export default function Bun({ bun, type }) {
  const { name, price, image } = bun;

  return (
    <li className="ml-8">
      <ConstructorElement
        type={type}
        isLocked={true}
        text={`${name}\n${type === BUN_TYPE.TOP ? '(верх)' : '(низ)'} `}
        thumbnail={image}
        price={price} />
    </li>
  );
}

Bun.propTypes = {
  bun: ingredientPropTypes.isRequired,
  type: PropTypes.string
};