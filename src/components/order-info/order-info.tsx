import React, {FC} from "react";
import styles from "./order-info.module.css";
import {formatDate} from "../../utils/utils";
import {OrderInfoList} from "../order-info-list/order-info-list";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "../../services/hooks";
import {useParams} from "react-router";
import {TCorrectOrder} from "../../services/types";
import {selectOrderAction} from "../../services/actions/feed";
import {NotFoundPage} from "../../pages";
import {Preloader} from "../preloader/preloader";

type TOrderInfo = {
  modal?: boolean;
}

export const OrderInfo: FC<TOrderInfo> = ({ modal = false }) => {
  const dispatch = useDispatch();

  const { loading } = useSelector(state => state.ws);
  const { orders } = useSelector((state => state.feed));
  const { selectedOrder } = useSelector((state) => state.feed);
  const { id } = useParams<{ id?: string }>();

  React.useEffect(() => {
    if (!selectedOrder && id && orders) {
      const order = orders.find((order: TCorrectOrder) => order._id === id);
      order && dispatch(selectOrderAction(order));
    }
  }, [selectedOrder, id, orders, dispatch]);

  if (loading) {
    return (<Preloader />);
  }
  if (!selectedOrder) {
    return (<NotFoundPage />);
  }

  const { number, name, status, ingredients, createdAt } = selectedOrder;
  const date = createdAt && formatDate(createdAt);
  const cost = ingredients && ingredients.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);

  const done = status === 'done';

  return (
    <section className={`${styles.container} mt-15 mb-10 mr-10 ml-10`}>
      <p className={`text text_type_digits-default ${!modal && styles.number}`}>{`#${number}`}</p>
      <p className={"text text_type_main-medium mt-10"}>{name}</p>
      <p className={`text text_type_main-default mt-3 ${done && styles.status}`}>{done ? 'Выполнен' :'Готовится'}</p>
      <p className={"text text_type_main-medium mt-15 mb-6"}>Состав:</p>
      <OrderInfoList ingredients={ingredients} />
      <div className={`${styles.footer} mt-10`}>
        <p className={"text text_type_main-default text_color_inactive"}>{date}</p>
        <div className={styles.total}>
          <p className={"text text_type_digits-default mr-2"}>{cost}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
};
