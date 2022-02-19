import React from "react";
import cardStyles from "./custom-constructor-element.module.css";
import {BUN_TYPE} from "../../utils/constants";
import PropTypes from "prop-types";

export default function CustomConstructorElement({ type, children }) {
  const classNames = `${cardStyles.card} ${type ? type === BUN_TYPE.TOP ? cardStyles.card_top : cardStyles.card_bottom : ''}`;

  return (
    <div className={classNames}>
      <p className="text text_type_main-default text_color_inactive">{children}</p>
    </div>
  )
}

CustomConstructorElement.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
};