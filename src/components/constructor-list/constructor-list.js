import React from "react";
import styles from "./constructor-list.module.css"
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import ConstructorCard from "../constructor-card/constructor-card";

export default function ConstructorList({ onDelete }) {
  const { ingredients } = useSelector(state => state.burgerConstructor);

  return (
    <div className={`${styles.container} custom-scroll pr-2`}>
      {
        ingredients.map((ingredient, index) => {
          const { uuid } = ingredient;
          return (
            <ConstructorCard ingredient={ingredient} index={index} onDelete={onDelete} key={uuid}/>
          );
        })
      }
    </div>
  );
}

ConstructorList.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

