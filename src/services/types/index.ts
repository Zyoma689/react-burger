import {TBurgerConstructorActions} from "../actions/burger-constructor";
import {TBurgerIngredientsActions} from "../actions/burger-ingredients";
import {TForgotPasswordActions} from "../actions/forgot-password";
import {TIngredientDetailsAction} from "../actions/ingredient-details";
import {TLoginActions} from "../actions/login";
import {TOrderDetailsActions} from "../actions/order-details";
import {TProfileActions} from "../actions/profile";
import {TRegisterActions} from "../actions/register";
import {TResetPasswordActions} from "../actions/reset-password";
import {store} from "../store";
import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk/es/types";

export type RootState = ReturnType<typeof store.getState>

type TApplicationActions =
  | TBurgerConstructorActions
  | TBurgerIngredientsActions
  | TForgotPasswordActions
  | TIngredientDetailsAction
  | TLoginActions
  | TOrderDetailsActions
  | TProfileActions
  | TRegisterActions
  | TResetPasswordActions;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;

export type AppDispatch = typeof store.dispatch;