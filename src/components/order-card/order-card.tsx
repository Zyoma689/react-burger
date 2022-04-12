import React, {FC} from "react";
import {Link, useLocation, useRouteMatch} from "react-router-dom";
import {useDispatch, useSelector} from "../../services/hooks";
import {IngredientPreviewList} from "../ingredient-preview-list/ingredient-preview-list";
import styles from "./order-card.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {formatDate} from "../../utils/utils";
import {TCorrectOrder} from "../../services/types";
import {selectOrderAction} from "../../services/actions/feed";
import {PATH, STATUS} from "../../utils/constants";

type TOrderCard = {
  order: TCorrectOrder;
}

export const OrderCard: FC<TOrderCard> = ({ order }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { url } = useRouteMatch();

  const { number, ingredients, createdAt, name, _id, status } = order;

  const date = React.useMemo(() => formatDate(createdAt), [createdAt]);
  const cost = React.useMemo(() => ingredients.reduce((acc, cur) =>  acc + cur.price * cur.quantity, 0), [ingredients]);

  return (
    <li className={styles.card} onClick={() => dispatch(selectOrderAction(order))}>
      <Link
        to={{ pathname: `${url}/${_id}`, state: { orderCard: location } }}
        className={styles.link}
      >
        <div className={"mt-6 mr-6 ml-6 mb-6"}>
          <div className={styles.header}>
            <p className={"text text_type_digits-default"}>{`#${number}`}</p>
            <p className={"text text_type_main-default text_color_inactive"}>{date}</p>
          </div>
          <p className={"text text_type_main-medium mt-6"}>{name}</p>
          {
            url === PATH.USER_ORDERS &&
            <p className={`text text_type_main-small ${status === 'done' && styles.done} mt-2`}>
              {status === 'created' ? STATUS.CREATED : status === 'pending' ? STATUS.PENDING : STATUS.DONE}
            </p>
          }

          <div className={`${styles.container} mt-6`}>
            <IngredientPreviewList ingredients={ingredients}/>
            <div className={`${styles.cost} ml-6`}>
              <p className={"text text_type_digits-default mr-2"}>{cost}</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
};