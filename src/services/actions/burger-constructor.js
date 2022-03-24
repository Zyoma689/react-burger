export const SET_BUNS = 'SET_BUNS';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';
export const CLEAR_INGREDIENTS = 'CLEAR_INGREDIENTS';

export function setBuns(bun) {
  return {
    type: SET_BUNS,
    bun: bun,
  }
}

export function addIngredient(ingredient) {
  return {
    type: ADD_INGREDIENT,
    ingredient: ingredient,
  }
}

export function deleteIngredient(uuid) {
  return {
    type: DELETE_INGREDIENT,
    uuid: uuid,
  }
}

export function moveIngredient(dragIndex, hoverIndex) {
  return {
    type: MOVE_INGREDIENT,
    dragIndex: dragIndex,
    hoverIndex: hoverIndex,
  }
}

export function clearConstructor() {
  return {
    type: CLEAR_INGREDIENTS,
  }
}

