import { orderDetailsReducer, initialState } from "./order-details";
import {
  CLOSE_ORDER_DETAILS_MODAL,
  OPEN_ORDER_DETAILS_MODAL,
  PLACE_ORDER_FAILED,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS
} from "../constants";

describe('orderDetailsReducer', () => {
  it('initialState', () => {
    expect(orderDetailsReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('PLACE_ORDER_REQUEST', () => {
    const action = {
      type: PLACE_ORDER_REQUEST,
    };
    expect(orderDetailsReducer(undefined, action)).toEqual({
      ...initialState,
      placeOrderRequest: true,
    });
  });

  it('PLACE_ORDER_SUCCESS', () => {
    const action = {
      type: PLACE_ORDER_SUCCESS,
      orderId: '12345',
    };
    expect(orderDetailsReducer(undefined, action)).toEqual({
      ...initialState,
      placeOrderRequest: false,
      placeOrderFailed: false,
      orderId: '12345',
    });
  });

  it('PLACE_ORDER_FAILED', () => {
    const action = {
      type: PLACE_ORDER_FAILED,
    };
    expect(orderDetailsReducer(undefined, action)).toEqual({
      ...initialState,
      placeOrderRequest: false,
      placeOrderFailed: true,
      orderId: '',
    });
  });

  it('OPEN_ORDER_DETAILS_MODAL', () => {
    const action = {
      type: OPEN_ORDER_DETAILS_MODAL,
    };
    expect(orderDetailsReducer(undefined, action)).toEqual({
      ...initialState,
      modalIsOpen: true,
    });
  });

  it('CLOSE_ORDER_DETAILS_MODAL', () => {
    const action = {
      type: CLOSE_ORDER_DETAILS_MODAL,
    };
    expect(orderDetailsReducer(undefined, action)).toEqual({
      ...initialState,
      modalIsOpen: false,
    });
  });
});