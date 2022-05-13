import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  CHANGE_BUNS,
  INCREASE_INGREDIENT,
  DECREASE_INGREDIENT,
  CHANGE_TAB,
  CLEAR_QUANTITY,
} from "../constants";
import {INGREDIENT_TYPE, INGREDIENTS_TITLES} from "../../utils/constants";
import {
  TIngredient,
} from "../../types";
import {TBurgerIngredientsActions} from "../actions/burger-ingredients";

type TBurgerIngredientsState = {
  ingredients: TIngredient[];
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
  tab: string;
}

export const initialState: TBurgerIngredientsState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  tab: INGREDIENTS_TITLES.BUN,
};

export const burgerIngredientsReducer = (state = initialState, action: TBurgerIngredientsActions): TBurgerIngredientsState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredients: action.ingredients,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true,
        ingredients: [],
      }
    }
    case CHANGE_BUNS: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(ingredient => {
          if (ingredient.type === INGREDIENT_TYPE.BUN) {
            if (ingredient._id === action._id) {
              return { ...ingredient, quantity: 2 };
            } else {
              return { ...ingredient, quantity: 0 };
            }
          } else {
            return ingredient;
          }
        })
      }
    }
    case INCREASE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(ingredient => {
          return ingredient._id === action._id ? { ...ingredient, quantity: ++ingredient.quantity } : ingredient;
        })
      }
    }
    case DECREASE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(ingredient => {
          return ingredient._id === action._id ? { ...ingredient, quantity: --ingredient.quantity } : ingredient;
        })
      }
    }
    case CLEAR_QUANTITY: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(ingredient => ({ ...ingredient, quantity: 0 })),
      }
    }
    case CHANGE_TAB: {
      return {
        ...state,
        tab: action.tab,
      }
    }
    default: {
      return state;
    }
  }
};