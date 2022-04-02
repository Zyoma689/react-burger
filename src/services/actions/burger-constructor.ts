import {ADD_INGREDIENT, CLEAR_INGREDIENTS, DELETE_INGREDIENT, MOVE_INGREDIENT, SET_BUNS} from "../constants";
import {TBun, TConstructorIngredient, TIngredient} from "../../types";

export interface ISetBunsAction {
  readonly type: typeof SET_BUNS;
  readonly bun: TBun;
}

export interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  readonly ingredient: TConstructorIngredient;
}

export interface IDeleteIngredientAction {
  readonly type: typeof DELETE_INGREDIENT;
  readonly uuid: string;
}

export interface IMoveIngredientAction {
  readonly type: typeof MOVE_INGREDIENT;
  readonly dragIndex: number;
  readonly hoverIndex: number;
}

export interface IClearConstructor {
  readonly type: typeof CLEAR_INGREDIENTS;
}

export type TBurgerConstructorActions =
  | ISetBunsAction
  | IAddIngredientAction
  | IDeleteIngredientAction
  | IMoveIngredientAction
  | IClearConstructor;


export const setBunsAction = (bun: TBun): ISetBunsAction => ({
  type: SET_BUNS,
  bun,
});

export const addIngredientAction = (ingredient: TConstructorIngredient): IAddIngredientAction => ({
  type: ADD_INGREDIENT,
  ingredient,
});

export const deleteIngredientAction = (uuid: string): IDeleteIngredientAction => ({
  type: DELETE_INGREDIENT,
  uuid,
});

export const moveIngredientAction = (dragIndex: number, hoverIndex: number): IMoveIngredientAction => ({
  type: MOVE_INGREDIENT,
  dragIndex,
  hoverIndex,
});

export const clearConstructorAction = (): IClearConstructor => ({
  type: CLEAR_INGREDIENTS,
});