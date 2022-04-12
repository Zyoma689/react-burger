import React, {FC} from "react";
import {OrderList} from "../../components/order-list/order-list";
import styles from "./user-orders.module.css";
import {useDispatch, useSelector} from "../../services/hooks";
import {wsConnectionClosedAction, wsConnectionStartAction} from "../../services/actions/ws";
import {TOKEN, WS_USER_ORDERS_URL} from "../../utils/constants";
import {getCookie, getCorrectOrders} from "../../utils/utils";
import {Preloader} from "../../components/preloader/preloader";
import {setCorrectOrdersAction} from "../../services/actions/feed";

export const UserOrders: FC = () => {
  const dispatch = useDispatch();

  const cookie = getCookie(TOKEN.ACCESS);
  const accessToken = cookie && cookie.split(' ')[1];
  const wsUrl = WS_USER_ORDERS_URL + `?token=${accessToken}`;

  const { loading } = useSelector(state => state.ws);

  React.useEffect(() => {
    dispatch(wsConnectionStartAction(wsUrl));
    return () => {
      dispatch(wsConnectionClosedAction());
    }
  }, [dispatch]);

  const { orders } = useSelector((state) => state.ws);
  const ingredientsData = useSelector((state) => state.burgerIngredients.ingredients);

  const correctOrders = orders && getCorrectOrders(orders, ingredientsData).reverse();

  React.useEffect(() => {
    if (correctOrders && correctOrders.length) {
      dispatch(setCorrectOrdersAction(correctOrders));
    }
  });

  if (loading) {
    return (<Preloader />);
  }

  if (!correctOrders) {
    return (<p className={`${styles.text} text text_type_main-large text_color_inactive`}>Список пуст</p>)
  }

  return (
    <section className={`${styles.section} custom-scroll pr-2`}>
      <OrderList orders={correctOrders}/>
    </section>

  )
};