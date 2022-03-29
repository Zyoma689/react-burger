import { getIngredientsRequest } from "../../utils/api";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const CHANGE_BUNS = 'CHANGE_BUNS';

export const INCREASE_INGREDIENT = 'INCREASE_INGREDIENT';
export const DECREASE_INGREDIENT = 'DECREASE_INGREDIENT';
export const CLEAR_QUANTITY = 'CLEAR_QUANTITY';

export const CHANGE_TAB = 'CHANGE_TAB';

export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    getIngredientsRequest()
      .then((res) => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: res.data.map(ingredient => ({ ...ingredient, quantity: 0 })),
        })
      })
      .catch(() => {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        })
      })
  }
}

export function changeBuns(id) {
  return {
    type: CHANGE_BUNS,
    _id: id,
  }
}

export function increaseIngredient(id) {
  return {
    type: INCREASE_INGREDIENT,
    _id: id,
  }
}

export function decreaseIngredient(id) {
  return {
    type: DECREASE_INGREDIENT,
    _id: id,
  }
}

export function clearQuantity() {
  return {
    type: CLEAR_QUANTITY,
  }
}

export function changeTab(tab) {
  return {
    type: CHANGE_TAB,
    tab: tab,
  }
}