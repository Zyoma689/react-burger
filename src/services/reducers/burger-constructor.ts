import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  MOVE_INGREDIENT,
  SET_BUNS,
  CLEAR_INGREDIENTS,
} from "../constants";
import {TBurgerConstructorActions} from "../actions/burger-constructor";
import {TBun, TConstructorIngredient} from "../../types";

type TBurgerConstructorState = {
  ingredients: TConstructorIngredient[];
  bun: TBun;
};

const initialState: TBurgerConstructorState = {
  ingredients: [],
  bun: null,
};

export const burgerConstructorReducer = (state = initialState, action: TBurgerConstructorActions): TBurgerConstructorState => {
  switch (action.type) {
    case SET_BUNS: {
      return {
        ...state,
        bun: action.bun,
      }
    }
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [action.ingredient, ...state.ingredients],
      }
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter((ingredient) => ingredient.uuid !== action.uuid)
      }
    }
    case MOVE_INGREDIENT: {
      const newIngredients = [...state.ingredients];
      [ newIngredients[action.dragIndex], newIngredients[action.hoverIndex] ] = [ newIngredients[action.hoverIndex], newIngredients[action.dragIndex] ];
      return {
        ...state,
        ingredients: newIngredients,
      }
    }
    case CLEAR_INGREDIENTS: {
      return {
        ...state,
        ingredients: initialState.ingredients,
        bun: initialState.bun,
      }
    }
    default: {
      return state;
    }
  }
};