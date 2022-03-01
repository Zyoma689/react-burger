import React from "react";
import AppHeader from "../app-header/app-header";
import appStyles from "./app.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useSelector, useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions/burger-ingredients";
import {
  CLOSE_INGREDIENT_DETAILS_MODAL,
  UNSELECT_INGREDIENT
} from "../../services/actions/ingredient-details";
import {CLOSE_ORDER_DETAILS_MODAL} from "../../services/actions/order-details";

import { BrowserRouter as Router, Route, Switch, useHistory, useLocation } from "react-router-dom";
import {HomePage} from "../../pages";


function App() {
  const dispatch = useDispatch();

  const ingredientDetailsModal = useSelector(state => state.ingredientDetails.modalIsOpen);
  const orderDetailsModal = useSelector(state => state.orderDetails.modalIsOpen);

  function handleCloseIngredientDetailsModal() {
    dispatch({ type: CLOSE_INGREDIENT_DETAILS_MODAL });
    dispatch({ type: UNSELECT_INGREDIENT });
  }

  function handleCloseOrderDetailsModal() {
    dispatch({ type: CLOSE_ORDER_DETAILS_MODAL });
  }

  React.useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);

  return (
    <Router>
      <AppHeader/>
      <main className={appStyles.main}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>

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
    </Router>
  );
}

export default App;