import React, {FC} from "react";
import {OrderInfo} from "../../components/order-info/order-info";

export const OrderInfoPage: FC = () => {
  return (
    <main className="mt-30">
      <OrderInfo />
    </main>
  );
};