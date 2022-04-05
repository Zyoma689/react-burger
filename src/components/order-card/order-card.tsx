import React, {FC} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "../../services/hooks";
import {IngredientPreviewList} from "../ingredient-preview-list/ingredient-preview-list";
import {TIngredient} from "../../types";
import styles from "./order-card.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {formatDate} from "../../utils/utils";

type TOrderCard = {
  number: number;
  createdAt: string;
  name: string;
  ingredients: string[];
}

export const OrderCard: FC<TOrderCard> = ({ number, createdAt, name, ingredients: ingredientsIds }) => {
  // const order = {
  //   _id: "624ab11c1a3b2c001bcf534d",
  //   ingredients: [
  //     "60d3b41abdacab0026a733c6",
  //     "60d3b41abdacab0026a733c9",
  //     "60d3b41abdacab0026a733cd",
  //     "60d3b41abdacab0026a733cd",
  //     "60d3b41abdacab0026a733cd",
  //     "60d3b41abdacab0026a733c7",
  //     "60d3b41abdacab0026a733c7"
  //   ],
  //   status: "done",
  //   name: "Краторный бессмертный бургер",
  //   createdAt: "2022-04-04T08:49:32.722Z",
  //   updatedAt: "2022-04-04T08:49:32.904Z",
  //   number: 12901
  // };

  // const { number, createdAt, name, ingredients: ingredientsIds } = order;
  const ingredientsData = useSelector((state) => state.burgerIngredients.ingredients);

  const getIngredients = (ids: string[], data: TIngredient[]) => {
    const ingredients: TIngredient[] = [];
    if (data) {
      ids.forEach((id) => {
        ingredientsData.forEach((ingredient) => {
          if (ingredient._id === id) {
            ingredients.push(ingredient);
          }
        })
      })
    }
    return ingredients;
  };

  const ingredients = React.useMemo(() => getIngredients(ingredientsIds, ingredientsData), [ingredientsIds, ingredientsData]);
  const cost = React.useMemo(() => ingredients.reduce((acc, cur) => acc + cur.price, 0), [ingredients]);
  const date = React.useMemo(() => formatDate(createdAt), [createdAt]);
  // const ingredients: TIngredient[] = [];
  //
  // if (ingredientsData) {
  //   ingredientsIds.forEach((id) => {
  //     ingredientsData.forEach((ingredient) => {
  //       if (ingredient._id === id) {
  //         ingredients.push(ingredient);
  //       }
  //     })
  //   })
  // }


  return (
    <li className={styles.card}>
      <div className={"mt-6 mr-6 ml-6 mb-6"}>
        <div className={styles.header}>
          <p className={"text text_type_digits-default"}>{`#${number}`}</p>
          <p className={"text text_type_main-default text_color_inactive"}>{date}</p>
        </div>
        <p className={"text text_type_main-medium mt-6"}>{name}</p>
        <div className={`${styles.container} mt-6`}>
          <IngredientPreviewList ingredients={ingredients}/>
          <div className={`${styles.cost} ml-6`}>
            <p className={"text text_type_digits-default mr-2"}>{cost}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>

    </li>
  )
};