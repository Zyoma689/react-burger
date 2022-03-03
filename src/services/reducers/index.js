import { combineReducers } from "redux";
import { burgerIngredientsReducer } from "./burger-ingredients";
import {ingredientDetailsReducer} from "./ingredient-details";
import {burgerConstructorReducer} from "./burger-constructor";
import {orderDetailsReducer} from "./order-details";
import {loginReducer} from "./login";

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  ingredientDetails: ingredientDetailsReducer,
  burgerConstructor: burgerConstructorReducer,
  orderDetails: orderDetailsReducer,
  login: loginReducer,
});