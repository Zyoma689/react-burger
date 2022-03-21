export const SET_BUNS = 'SET_BUNS';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';

export const CLEAR_INGREDIENTS = 'CLEAR_INGREDIENTS';

export function clearConstructor() {
  return {
    type: CLEAR_INGREDIENTS,
  }
}

