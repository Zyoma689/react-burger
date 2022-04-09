import React, {FC} from "react";
import styles from "./feed.module.css";
import {OrderList} from "../../components/order-list/order-list";
import {StatusBoard} from "../../components/status-board/status-board";
import {wsConnectionClosedAction, wsConnectionStartAction} from "../../services/actions/ws";
import {WS_ALL_ORDERS_URL} from "../../utils/constants";
import {useDispatch, useSelector} from "../../services/hooks";
import {getCorrectOrders, getDoneInProgressOrders} from "../../utils/utils";
import {setCorrectOrdersAction, setDoneOrdersAction} from "../../services/actions/feed";
import {Preloader} from "../../components/preloader/preloader";

export const FeedPage: FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.ws);

  React.useEffect(() => {
    dispatch(wsConnectionStartAction(WS_ALL_ORDERS_URL));
    return () => {
      dispatch(wsConnectionClosedAction());
    }
  }, [dispatch]);

  const { orders } = useSelector((state) => state.ws);

  const ingredientsData = useSelector((state) => state.burgerIngredients.ingredients);
  const correctOrders = orders && getCorrectOrders(orders, ingredientsData);
  const doneInProgressOrders = correctOrders && getDoneInProgressOrders(correctOrders);

  React.useEffect(() => {
    if (correctOrders && correctOrders.length && doneInProgressOrders) {
      dispatch(setCorrectOrdersAction(correctOrders));
      dispatch(setDoneOrdersAction(doneInProgressOrders));
    }
  });

  if (loading) {
    return (<Preloader />);
  }

  if (!correctOrders) {
    return (<p className={`${styles.text} text text_type_main-large text_color_inactive`}>Список пуст</p>)
  }

  return (
    <main className={styles.main}>
      <h1 className={"text text_type_main-large mb-5 mt-10"}>Лента заказов</h1>
      <section className={`${styles.orders} custom-scroll pr-2`}>
        <OrderList orders={correctOrders}/>
      </section>
      <StatusBoard />
    </main>
  );
};