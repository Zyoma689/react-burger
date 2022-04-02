import React from "react";
import styles from "./order-details.module.css";
import image from "../../images/done.svg";
import {useSelector} from "../../services/hooks";


export const OrderDetails = () => {
  const { orderId } = useSelector((state: any) => state.orderDetails);

  return (
    <div className={`${styles.container} mt-30 mb-30`}>
      <p className="text text_type_digits-large">{orderId}</p>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <img className="mt-15" src={image} alt="Успешно"/>
      <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mt-2">Дождитесь готовности на орбитальной станции</p>
    </div>
  );
}
