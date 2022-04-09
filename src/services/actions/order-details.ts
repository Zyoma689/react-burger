import {placeOrder} from "../../utils/api";
import {clearConstructorAction} from "./burger-constructor";
import {clearQuantityAction} from "./burger-ingredients";
import {
  CLOSE_ORDER_DETAILS_MODAL,
  OPEN_ORDER_DETAILS_MODAL,
  PLACE_ORDER_FAILED,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS
} from "../constants";

import {AppDispatch, AppThunk} from "../types";
import {refreshTokenThunk} from "./profile";

export interface IOpenOrderDetailsModal {
  readonly type: typeof OPEN_ORDER_DETAILS_MODAL;
}

export interface ICloseOrderDetailsModal {
  readonly type: typeof CLOSE_ORDER_DETAILS_MODAL;
}

export interface IPlaceOrderAction {
  readonly type: typeof PLACE_ORDER_REQUEST;
}

export interface IPlaceOrderSuccessAction {
  readonly type: typeof PLACE_ORDER_SUCCESS;
  readonly orderId: string;
}

export interface IPlaceOrderFailedAction {
  readonly type: typeof PLACE_ORDER_FAILED;
}

export type TOrderDetailsActions =
  | IOpenOrderDetailsModal
  | ICloseOrderDetailsModal
  | IPlaceOrderAction
  | IPlaceOrderSuccessAction
  | IPlaceOrderFailedAction;

export const openOrderDetailsModal = (): IOpenOrderDetailsModal => ({
  type: OPEN_ORDER_DETAILS_MODAL,
});

export const closeOrderDetailsModal = (): ICloseOrderDetailsModal => ({
  type: CLOSE_ORDER_DETAILS_MODAL,
});

export const placeOrderAction = (): IPlaceOrderAction => ({
  type: PLACE_ORDER_REQUEST,
});

export const placeOrderSuccessAction = (orderId: string): IPlaceOrderSuccessAction => ({
  type: PLACE_ORDER_SUCCESS,
  orderId,
});

export const placeOrderFailedAction = (): IPlaceOrderFailedAction => ({
  type: PLACE_ORDER_FAILED,
});

export const placeOrderThunk: AppThunk = (ingredients) => (dispatch: AppDispatch | AppThunk) => {
  dispatch(placeOrderAction());
  placeOrder(ingredients)
    .then((res) => {
      const orderId = res.order.number.toString();
      dispatch(placeOrderSuccessAction(orderId));
      dispatch(openOrderDetailsModal());
      dispatch(clearConstructorAction());
      dispatch(clearQuantityAction());
    })
    .catch(() => {
      dispatch(placeOrderFailedAction());
      dispatch(refreshTokenThunk());
    })
};