import {
  CHANGE_BUNS, CHANGE_TAB, CLEAR_QUANTITY, DECREASE_INGREDIENT, GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, INCREASE_INGREDIENT,
} from "../constants";
import { getIngredientsRequest } from "../../utils/api";
import {TIngredient} from "../../types";
import {AppDispatch, AppThunk} from "../types";

export interface IGetIngredientsAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: TIngredient[];
}

export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export interface IIncreaseIngredientAction {
  readonly type: typeof INCREASE_INGREDIENT;
  readonly _id: string;
}

export interface IDecreaseIngredientAction {
  readonly type: typeof DECREASE_INGREDIENT;
  readonly _id: string;
}

export interface IClearQuantityAction {
  readonly type: typeof CLEAR_QUANTITY;
}

export interface IChangeBunsAction {
  readonly type: typeof CHANGE_BUNS;
  readonly _id: string;
}

export interface IChangeTabAction {
  readonly type: typeof CHANGE_TAB;
  readonly tab: string;
}

export type TBurgerIngredientsActions =
  | IGetIngredientsAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction
  | IIncreaseIngredientAction
  | IDecreaseIngredientAction
  | IClearQuantityAction
  | IChangeBunsAction
  | IChangeTabAction

export const getIngredientsAction = (): IGetIngredientsAction => ({
  type: GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccessAction = (ingredients: TIngredient[]): IGetIngredientsSuccessAction => ({
  type: GET_INGREDIENTS_SUCCESS,
  ingredients,
});

export const getIngredientsFailedAction = (): IGetIngredientsFailedAction => ({
  type: GET_INGREDIENTS_FAILED,
});

export const increaseIngredientAction = (_id: string): IIncreaseIngredientAction => ({
  type: INCREASE_INGREDIENT,
  _id,
});

export const decreaseIngredientAction = (_id: string): IDecreaseIngredientAction => ({
  type: DECREASE_INGREDIENT,
  _id,
});

export const clearQuantityAction = (): IClearQuantityAction => ({
  type: CLEAR_QUANTITY,
});

export const changeBunsAction = (_id: string): IChangeBunsAction => ({
  type: CHANGE_BUNS,
  _id,
});

export const changeTabAction = (tab: string): IChangeTabAction => ({
  type: CHANGE_TAB,
  tab,
});

export const getIngredientsThunk: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(getIngredientsAction());
  getIngredientsRequest()
    .then((res) => {
      const ingredients = res.data.map((ingredient: TIngredient) => ({ ...ingredient, quantity: 0 }));
      dispatch(getIngredientsSuccessAction(ingredients));
    })
    .catch(() => {
      dispatch(getIngredientsFailedAction());
    })
};
