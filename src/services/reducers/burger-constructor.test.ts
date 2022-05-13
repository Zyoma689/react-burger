import { burgerConstructorReducer, initialState } from "./burger-constructor";
import {ADD_INGREDIENT, CLEAR_INGREDIENTS, DELETE_INGREDIENT, MOVE_INGREDIENT, SET_BUNS} from "../constants";
import {mockBunA, mockConstructorIngredientA, mockConstructorIngredientB} from "../../utils/mock-data";

describe('burgerConstructorReducer', () => {
  it('Должен вернуть initialState', () => {
    expect(burgerConstructorReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('SET_BUNS', () => {
    const action = {
      type: SET_BUNS,
      bun: mockBunA,
    };
    expect(burgerConstructorReducer(undefined, action)).toEqual({
      ...initialState,
      bun: mockBunA,
    });
  });

  it('ADD_INGREDIENT', () => {
    const action = {
      type: ADD_INGREDIENT,
      ingredient: mockConstructorIngredientA,
    };
    expect(burgerConstructorReducer(undefined, action)).toEqual({
      ...initialState,
      ingredients: [mockConstructorIngredientA],
    });
  });

  it('DELETE_INGREDIENT', () => {
    const action = {
      type: DELETE_INGREDIENT,
      uuid: mockConstructorIngredientA.uuid,
    };
    expect(burgerConstructorReducer({
      ...initialState,
      ingredients: [mockConstructorIngredientA],
    }, action)).toEqual({
      ...initialState,
      ingredients: [],
    });
  });

  it('MOVE_INGREDIENT', () => {
    const action = {
      type: MOVE_INGREDIENT,
      dragIndex: 0,
      hoverIndex: 1,
    };
    expect(burgerConstructorReducer({
      ...initialState,
      ingredients: [mockConstructorIngredientA, mockConstructorIngredientB],
    }, action)).toEqual({
      ...initialState,
      ingredients: [mockConstructorIngredientB, mockConstructorIngredientA],
    });
  });

  it('CLEAR_INGREDIENTS', () => {
    const action = {
      type: CLEAR_INGREDIENTS,
    };
    expect(burgerConstructorReducer({
      ...initialState,
      ingredients: [mockConstructorIngredientA, mockConstructorIngredientB],
    }, action)).toEqual({
      ...initialState,
      ingredients: [],
    });
  });


});