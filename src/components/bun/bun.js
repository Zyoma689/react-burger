import React from "react";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {BUN_TYPE} from "../../utils/constants";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import CustomConstructorElement from "../custom-constructor-element/custom-constructor-element";

export default function Bun({ type }) {
  const { bun } = useSelector(state => state.burgerConstructor);

  return (
    <li className="ml-8">
      {
        bun ?
          <ConstructorElement
            type={type}
            isLocked={true}
            text={`${bun.name}\n${type === BUN_TYPE.TOP ? '(верх)' : '(низ)'} `}
            thumbnail={bun.image}
            price={bun.price}
          />
        :
          <CustomConstructorElement type={type}>Выберите булку</CustomConstructorElement>
      }
    </li>
  );
}

Bun.propTypes = {
  type: PropTypes.string.isRequired,
};