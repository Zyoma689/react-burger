import {
  CLOSE_INGREDIENT_DETAILS_MODAL,
  OPEN_INGREDIENT_DETAILS_MODAL,
  SELECT_INGREDIENT,
  UNSELECT_INGREDIENT
} from "../constants";
import {TIngredient} from "../../types";

export interface ISelectIngredientAction {
  readonly type: typeof SELECT_INGREDIENT;
  readonly selectedIngredient: TIngredient;
}

export interface IUnselectIngredientAction {
  readonly type: typeof UNSELECT_INGREDIENT;
}

export interface IOpenIngredientDetailsModalAction {
  readonly type: typeof OPEN_INGREDIENT_DETAILS_MODAL;
}

export interface ICloseIngredientDetailsModalAction {
  readonly type: typeof CLOSE_INGREDIENT_DETAILS_MODAL;
}

export type TIngredientDetailsActions =
  | ISelectIngredientAction
  | IUnselectIngredientAction
  | IOpenIngredientDetailsModalAction
  | ICloseIngredientDetailsModalAction;

export const selectIngredientAction = (selectedIngredient: TIngredient): ISelectIngredientAction => ({
  type: SELECT_INGREDIENT,
  selectedIngredient,
});

export const unselectIngredientAction = (): IUnselectIngredientAction => ({
  type: UNSELECT_INGREDIENT,
});

export const openIngredientDetailsModalAction = (): IOpenIngredientDetailsModalAction => ({
  type: OPEN_INGREDIENT_DETAILS_MODAL,
});

export const closeIngredientDetailsModalAction = (): ICloseIngredientDetailsModalAction => ({
  type: CLOSE_INGREDIENT_DETAILS_MODAL,
});
