import {TBurgerConstructorActions} from "../actions/burger-constructor";
import {TBurgerIngredientsActions} from "../actions/burger-ingredients";
import {TForgotPasswordActions} from "../actions/forgot-password";
import {TIngredientDetailsActions} from "../actions/ingredient-details";
import {TLoginActions} from "../actions/login";
import {TOrderDetailsActions} from "../actions/order-details";
import {TProfileActions} from "../actions/profile";
import {TRegisterActions} from "../actions/register";
import {TResetPasswordActions} from "../actions/reset-password";
import {store} from "../store";
import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk/es/types";
import {TIngredient} from "../../types";

export type RootState = ReturnType<typeof store.getState>

export type TApplicationActions =
  | TBurgerConstructorActions
  | TBurgerIngredientsActions
  | TForgotPasswordActions
  | TIngredientDetailsActions
  | TLoginActions
  | TOrderDetailsActions
  | TProfileActions
  | TRegisterActions
  | TResetPasswordActions;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;

export type AppDispatch = typeof store.dispatch;

export type TOrder = {
  _id: string;
  ingredients: string[];
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
};

export type TOrders = TOrder[];

export type TGetOrdersResponse = {
  success: boolean;
  orders: TOrders;
  total: number;
  totalToday: number;
}

export type TCorrectOrder = Omit<TOrder, 'ingredients'> & { ingredients: TIngredient[]};
export type TDoneInProgressOrders = {
  done: number[];
  inProgress: number[];
};