import React, {FC} from "react";
import {OrderInfo} from "../../components/order-info/order-info";
import {useDispatch, useSelector} from "../../services/hooks";
import {useRouteMatch} from "react-router";
import {wsConnectionClosedAction, wsConnectionStartAction} from "../../services/actions/ws";
import {PATH, TOKEN, WS_ALL_ORDERS_URL, WS_USER_ORDERS_URL} from "../../utils/constants";
import {getCookie, getCorrectOrders} from "../../utils/utils";
import {setCorrectOrdersAction} from "../../services/actions/feed";
import styles from "./order-info-page.module.css";

export const OrderInfoPage: FC = () => {
  const dispatch = useDispatch();
  const { path } = useRouteMatch();

  const cookie = getCookie(TOKEN.ACCESS);
  const accessToken = cookie && cookie.split(' ')[1];
  const wsUrl = path === PATH.ORDER ? WS_ALL_ORDERS_URL : WS_USER_ORDERS_URL + `?token=${accessToken}`;

  React.useEffect(() => {
    dispatch(wsConnectionStartAction(wsUrl));
    return () => {
      dispatch(wsConnectionClosedAction());
    }
  }, [dispatch]);

  const { orders } = useSelector((state) => state.ws);
  const ingredientsData = useSelector((state) => state.burgerIngredients.ingredients);
  const correctOrders = React.useMemo(() => getCorrectOrders(orders, ingredientsData), [orders, ingredientsData]);

  React.useEffect(() => {
    if (correctOrders.length) {
      dispatch(setCorrectOrdersAction(correctOrders));
    }
  }, [correctOrders]);

  return (
    <main className={`${styles.main} mt-15`}>
      <OrderInfo />
    </main>
  );
};