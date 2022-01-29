import React from "react";
import orderDetailsStyles from "./order-details.module.css";
import image from "../../images/done.svg";
import { ORDER_INFO } from "../../utils/constants";


export default function OrderDetails() {
  return (
    <div className={`${orderDetailsStyles.container} mt-30 mb-30`}>
      <p className="text text_type_digits-large">{ORDER_INFO.id}</p>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <img className="mt-15" src={image} alt="Успешно"/>
      <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mt-2">Дождитесь готовности на орбитальной станции</p>
    </div>
  );
}
