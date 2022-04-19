import { feedReducer, initialState } from "./feed";
import {SELECT_ORDER, SET_CORRECT_ORDERS, SET_DONE_ORDERS, UNSELECT_ORDER} from "../constants";
import {mockWSCorrectOrder} from "../../utils/mock-data";

describe('feedReducer', () => {
  it('initialState', () => {
    expect(feedReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('SET_CORRECT_ORDERS', () => {
    const action = {
      type: SET_CORRECT_ORDERS,
      payload: [mockWSCorrectOrder],
    };
    expect(feedReducer(undefined, action)).toEqual({
      ...initialState,
      orders: [mockWSCorrectOrder],
    });
  });

  it('SET_DONE_ORDERS', () => {
    const action = {
      type: SET_DONE_ORDERS,
      payload: {
        done: [1, 2],
        inProgress: [3, 4],
      },
    };
    expect(feedReducer(undefined, action)).toEqual({
      ...initialState,
      done: [1, 2],
      inProgress: [3, 4],
    });
  });

  it('SELECT_ORDER', () => {
    const action = {
      type: SELECT_ORDER,
      payload: mockWSCorrectOrder,
    };
    expect(feedReducer(undefined, action)).toEqual({
      ...initialState,
      selectedOrder: mockWSCorrectOrder,
    });
  });

  it('UNSELECT_ORDER', () => {
    const action = {
      type: UNSELECT_ORDER,
    };
    expect(feedReducer(undefined, action)).toEqual({
      ...initialState,
      selectedOrder: null,
    });
  });
});