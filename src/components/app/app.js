import React from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import appStyles from "./app.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {INGREDIENT_TYPE} from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import {CHANGE_BUNS, getIngredients, INCREASE_INGREDIENT} from "../../services/actions/burger-ingredients";
import {
  CLOSE_INGREDIENT_DETAILS_MODAL,
  OPEN_INGREDIENT_DETAILS_MODAL,
  selectIngredient,
  UNSELECT_INGREDIENT
} from "../../services/actions/ingredient-details";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {ADD_INGREDIENT, SET_BUNS} from "../../services/actions/burger-constructor";
import { v4 as uuid } from "uuid";
import {CLOSE_ORDER_DETAILS_MODAL} from "../../services/actions/order-details";


function App() {
  const dispatch = useDispatch();

  const ingredientDetailsModal = useSelector(state => state.ingredientDetails.modalIsOpen);
  const orderDetailsModal = useSelector(state => state.orderDetails.modalIsOpen);

  function handleOnDrop(ingredient) {
    const { _id, type } = ingredient;

    switch (type) {
      case INGREDIENT_TYPE.BUN: {
        dispatch({
          type: CHANGE_BUNS,
          _id: _id,
        });
        dispatch({
          type: SET_BUNS,
          bun: ingredient,
        });
        break;
      }
      default: {
        dispatch({
          type: INCREASE_INGREDIENT,
          _id: _id,
        });
        dispatch({
          type: ADD_INGREDIENT,
          ingredient: { ...ingredient, uuid: uuid() },
        });
        break;
      }
    }
  }

  function handleCloseIngredientDetailsModal() {
    dispatch({ type: CLOSE_INGREDIENT_DETAILS_MODAL });
    dispatch({ type: UNSELECT_INGREDIENT });
  }

  function handleCloseOrderDetailsModal() {
    dispatch({ type: CLOSE_ORDER_DETAILS_MODAL });
  }

  function handleIngredientCardClick(ingredient) {
    dispatch(selectIngredient(ingredient));
    dispatch({
      type: OPEN_INGREDIENT_DETAILS_MODAL,
    });
  }

  React.useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);

  return (
    <>
      <AppHeader/>
      <main className={appStyles.main}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients handleIngredientCardClick={handleIngredientCardClick}/>
          <BurgerConstructor handleOnDrop={handleOnDrop}/>
        </DndProvider>
      </main>
      {
        ingredientDetailsModal && (
          <Modal onClose={handleCloseIngredientDetailsModal} title={'Детали ингредиента'}>
            <IngredientDetails />
          </Modal>
        )
      }
      {
        orderDetailsModal && (
          <Modal onClose={handleCloseOrderDetailsModal}>
            <OrderDetails />
          </Modal>
        )
      }
    </>
  );
}

export default App;