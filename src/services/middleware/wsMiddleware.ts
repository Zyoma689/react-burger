import { Middleware, MiddlewareAPI } from "redux";
import {AppDispatch, RootState} from "../types";
import {
  wsConnectionClosedAction,
  wsConnectionErrorAction,
  wsConnectionGetOrdersAction,
  wsConnectionSuccessAction
} from "../actions/ws";
import {TWSOrderActions} from "../../types";

export const wsMiddleware = (wsActions: TWSOrderActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload, wsUrl } = action;
      const { wsInit, onClose, onSendOrders } = wsActions;

      if (type === wsInit) {
        socket = new WebSocket(wsUrl);
      }

      if (socket) {
        socket.onopen = () => {
          dispatch(wsConnectionSuccessAction());
        };

        socket.onerror = (event) => {
          dispatch(wsConnectionErrorAction(event));
        };

        socket.onmessage = (event) => {
          const data = JSON.parse(event.data);
          if (data.success) {
            dispatch(wsConnectionGetOrdersAction(data));
          } else {
            socket!.close();
          }
        };

        socket.onclose = () => {
          dispatch(wsConnectionClosedAction());
        };

        if (type === onClose) {
          socket.close();
        }

        if (type === onSendOrders) {
          const order = payload;
          socket.send(JSON.stringify(order));
        }
      }
      next(action);
    };
  }) as Middleware;
};