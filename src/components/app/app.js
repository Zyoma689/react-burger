import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AppHeader from "../app-header/app-header";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  IngredientDetailsPage,
  NotFoundPage,
} from "../../pages";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import ProtectedRoute from "../protected-route/protected-route";

import { getIngredients } from "../../services/actions/burger-ingredients";
import { CLOSE_INGREDIENT_DETAILS_MODAL, UNSELECT_INGREDIENT } from "../../services/actions/ingredient-details";
import {CLOSE_ORDER_DETAILS_MODAL} from "../../services/actions/order-details";
import {getUser} from "../../services/actions/profile";

import {PATH} from "../../utils/constants";


function App() {
  const dispatch = useDispatch();

  const location = useLocation();
  const history = useHistory();

  const modal = location.state && location.state.fromCardClick;

  const ingredientDetailsModal = useSelector(state => state.ingredientDetails.modalIsOpen);
  const orderDetailsModal = useSelector(state => state.orderDetails.modalIsOpen);

  function handleCloseIngredientDetailsModal() {
    dispatch({ type: CLOSE_INGREDIENT_DETAILS_MODAL });
    dispatch({ type: UNSELECT_INGREDIENT });
    history.replace({ pathname: PATH.HOME });
  }

  function handleCloseOrderDetailsModal() {
    dispatch({ type: CLOSE_ORDER_DETAILS_MODAL });
  }

  React.useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <AppHeader/>

      <Switch location={modal || location}>
        <Route exact path={PATH.HOME}>
          <HomePage />
        </Route>

        <Route exact path={PATH.LOGIN}>
          <LoginPage />
        </Route>

        <Route exact path={PATH.REGISTER}>
          <RegisterPage />
        </Route>

        <Route exact path={PATH.FORGOT_PASSWORD}>
          <ForgotPasswordPage />
        </Route>
        <Route exact path={PATH.RESET_PASSWORD}>
          <ResetPasswordPage />
        </Route>
        <ProtectedRoute path={PATH.PROFILE}>
          <ProfilePage />
        </ProtectedRoute>

        {
          !modal &&
            <Route exact path={PATH.INGREDIENT}>
              <IngredientDetailsPage />
            </Route>
        }
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>

      {
        ingredientDetailsModal && modal && (
          <Route path={PATH.INGREDIENT}>
            <Modal onClose={handleCloseIngredientDetailsModal} title={'Детали ингредиента'}>
              <IngredientDetails />
            </Modal>
          </Route>

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