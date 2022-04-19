import React, {FC} from "react";
import {Redirect, Route, Switch, useHistory, useLocation} from "react-router-dom";
import { useSelector, useDispatch } from "../../services/hooks";

import { AppHeader } from "../app-header/app-header";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  IngredientDetailsPage,
  NotFoundPage,
  FeedPage,
} from "../../pages";
import {Modal} from "../modal/modal";
import {IngredientDetails} from "../ingredient-details/ingredient-details";
import {OrderDetails} from "../order-details/order-details";
import {ProtectedRoute} from "../protected-route/protected-route";

import { getIngredientsThunk } from "../../services/actions/burger-ingredients";
import { closeIngredientDetailsModalAction, unselectIngredientAction } from "../../services/actions/ingredient-details";
import { closeOrderDetailsModal } from "../../services/actions/order-details";
import {getUserThunk} from "../../services/actions/profile";
import {PATH} from "../../utils/constants";
import {TLocationState} from "../../types";
import {OrderInfoPage} from "../../pages/order-info-page/order-info-page";
import {unselectOrderAction} from "../../services/actions/feed";
import {OrderInfo} from "../order-info/order-info";

export const App: FC = () => {
  const dispatch = useDispatch();

  const location = useLocation<TLocationState>();
  const history = useHistory();

  const ingredientDetailsModal = location.state && location.state.ingredientCard;
  const orderInfoModal = location.state && location.state.orderCard;
  const orderDetailsModal = useSelector((state) => state.orderDetails.modalIsOpen);

  function handleCloseIngredientDetailsModal() {
    dispatch(closeIngredientDetailsModalAction());
    dispatch(unselectIngredientAction());
    history.replace({ pathname: PATH.HOME });
  }

  function handleCloseOrderInfoModal() {
    dispatch(unselectOrderAction());
    history.goBack();
  }

  function handleCloseOrderDetailsModal() {
    dispatch(closeOrderDetailsModal());
  }

  React.useEffect(() => {
    dispatch(getIngredientsThunk());
    dispatch(getUserThunk());
  }, [dispatch]);

  return (
    <>
      <AppHeader/>

      <Switch location={ingredientDetailsModal || orderInfoModal || location}>
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

        <Route exact path={PATH.INGREDIENT}>
          <IngredientDetailsPage />
        </Route>

        <Route exact path={PATH.FEED}>
          <FeedPage />
        </Route>

        <Route exact path={PATH.ORDER}>
          <OrderInfoPage />
        </Route>

        <Route exact path={PATH.REACT_BURGER}>
          <Redirect to={PATH.HOME} />
        </Route>

        <ProtectedRoute exact path={PATH.USER_ORDER}>
          <OrderInfoPage />
        </ProtectedRoute>

        <ProtectedRoute path={PATH.PROFILE}>
          <ProfilePage />
        </ProtectedRoute>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>

      {
        ingredientDetailsModal && (
          <Route path={PATH.INGREDIENT}>
            <Modal onClose={handleCloseIngredientDetailsModal} title={'Детали ингредиента'}>
              <IngredientDetails />
            </Modal>
          </Route>

        )
      }
      {
        orderInfoModal && (
          <>
            <Route path={PATH.ORDER}>
              <Modal onClose={handleCloseOrderInfoModal} >
                <OrderInfo modal={true} />
              </Modal>
            </Route>

            <Route path={PATH.USER_ORDER}>
              <Modal onClose={handleCloseOrderInfoModal} >
                <OrderInfo modal={true} />
              </Modal>
            </Route>
          </>

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
};