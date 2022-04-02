import React, {FC} from "react";
import styles from "./constructor-list.module.css"
import {useSelector} from "../../services/hooks";
import {ConstructorCard} from "../constructor-card/constructor-card";
import {TConstructorIngredient, TConstructorList} from "../../types";

export const ConstructorList: FC<TConstructorList> = ({ onDelete }) => {
  const { ingredients } = useSelector((state: any) => state.burgerConstructor);

  return (
    <div className={`${styles.container} custom-scroll pr-2`}>
      {
        ingredients.map((ingredient: TConstructorIngredient, index: number) => {
          const { uuid } = ingredient;

          return (
            <ConstructorCard ingredient={ingredient} index={index} onDelete={onDelete} key={uuid}/>
          );
        })
      }
    </div>
  );
};
