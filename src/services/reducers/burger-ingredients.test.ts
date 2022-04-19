import { burgerIngredientsReducer, initialState } from "./burger-ingredients";
import {
  CHANGE_BUNS, CHANGE_TAB, CLEAR_QUANTITY,
  DECREASE_INGREDIENT,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS, INCREASE_INGREDIENT
} from "../constants";
import {mockBunA, mockBunB, mockIngredientA, mockIngredientB, mockIngredients} from "../../utils/mock-data";

describe('burgerIngredientsReducer',() => {
  it('Должен вернуть initialState', () => {
    expect(burgerIngredientsReducer(undefined, {} as any)).toEqual({
      ...initialState,
    });
  });

  it('GET_INGREDIENTS_REQUEST', () => {
    const action = {
      type: GET_INGREDIENTS_REQUEST,
    };
    expect(burgerIngredientsReducer(undefined, action)).toEqual({
      ...initialState,
      ingredientsRequest: true,
    });
  });

  it('GET_INGREDIENTS_SUCCESS', () => {
    const action = {
      type: GET_INGREDIENTS_SUCCESS,
      ingredients: mockIngredients,
    };
    expect(burgerIngredientsReducer(undefined, action)).toEqual({
      ...initialState,
      ingredientsRequest: false,
      ingredientsFailed: false,
      ingredients: mockIngredients,
    });
  });

  it('GET_INGREDIENTS_FAILED', () => {
    const action = {
      type: GET_INGREDIENTS_FAILED,
    };
    expect(burgerIngredientsReducer(undefined, action)).toEqual({
      ...initialState,
      ingredientsRequest: false,
      ingredientsFailed: true,
      ingredients: [],
    });
  });

  it('CHANGE_BUNS', () => {
    const action = {
      type: CHANGE_BUNS,
      _id: mockBunB._id,
    };
    expect(burgerIngredientsReducer({
      ...initialState,
      ingredients: [{ ...mockBunA, quantity: 2}, mockBunB]
    }, action)).toEqual({
      ...initialState,
      ingredients: [mockBunA, { ...mockBunB, quantity: 2 }]
    });
  });

  it('INCREASE_INGREDIENT', () => {
    const action = {
      type: INCREASE_INGREDIENT,
      _id: mockIngredientA._id,
    };
    expect(burgerIngredientsReducer({
      ...initialState,
      ingredients: [mockIngredientA, mockIngredientB]
    }, action)).toEqual({
      ...initialState,
      ingredients: [{ ...mockIngredientA, quantity: 1 }, mockIngredientB],
    });
  });

  it('DECREASE_INGREDIENT', () => {
    const action = {
      type: DECREASE_INGREDIENT,
      _id: mockIngredientA._id,
    };
    expect(burgerIngredientsReducer({
      ...initialState,
      ingredients: [{ ...mockIngredientA, quantity: 1 }, mockIngredientB]
    }, action)).toEqual({
      ...initialState,
      ingredients: [{ ...mockIngredientA, quantity: 0 }, mockIngredientB],
    });
  });

  it('CLEAR_QUANTITY', () => {
    const action = {
      type: CLEAR_QUANTITY,
    };
    expect(burgerIngredientsReducer({
      ...initialState,
      ingredients: [{ ...mockIngredientA, quantity: 5 }, { ...mockIngredientB, quantity: 3 }]
    }, action)).toEqual({
      ...initialState,
      ingredients: [{ ...mockIngredientA, quantity: 0 }, { ...mockIngredientB, quantity: 0 }],
    });
  });

  it('CHANGE_TAB', () => {
    const action = {
      type: CHANGE_TAB,
      tab: 'tab',
    };
    expect(burgerIngredientsReducer(undefined, action)).toEqual({
      ...initialState,
      tab: 'tab',
    });
  });
});