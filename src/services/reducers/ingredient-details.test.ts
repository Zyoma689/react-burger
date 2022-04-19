import { ingredientDetailsReducer, initialState } from "./ingredient-details";
import {
  CLOSE_INGREDIENT_DETAILS_MODAL,
  OPEN_INGREDIENT_DETAILS_MODAL,
  SELECT_INGREDIENT,
  UNSELECT_INGREDIENT
} from "../constants";
import {mockIngredientA} from "../../utils/mock-data";

describe('ingredientDetailsReducer', () => {
  it('initialState', () => {
    expect(ingredientDetailsReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('SELECT_INGREDIENT', () => {
    const action = {
      type: SELECT_INGREDIENT,
      selectedIngredient: mockIngredientA,
    };
    expect(ingredientDetailsReducer(undefined, action)).toEqual({
      ...initialState,
      selectedIngredient: mockIngredientA,
    });
  });

  it('UNSELECT_INGREDIENT', () => {
    const action = {
      type: UNSELECT_INGREDIENT,
    };
    expect(ingredientDetailsReducer(undefined, action)).toEqual({
      ...initialState,
      selectedIngredient: null,
    });
  });

  it('OPEN_INGREDIENT_DETAILS_MODAL', () => {
    const action = {
      type: OPEN_INGREDIENT_DETAILS_MODAL,
    };
    expect(ingredientDetailsReducer(undefined, action)).toEqual({
      ...initialState,
      modalIsOpen: true,
    });
  });

  it('CLOSE_INGREDIENT_DETAILS_MODAL', () => {
    const action = {
      type: CLOSE_INGREDIENT_DETAILS_MODAL,
    };
    expect(ingredientDetailsReducer(undefined, action)).toEqual({
      ...initialState,
      modalIsOpen: false,
    });
  });
});