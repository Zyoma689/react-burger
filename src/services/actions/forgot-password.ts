import * as api from "../../utils/api";
import {
  FORGOT_PASSWORD_FORM_SUBMIT,
  FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
  FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
  FORGOT_PASSWORD_RESET,
} from "../constants";
import {AppDispatch, AppThunk} from "../types";

export interface IForgotPasswordAction {
  readonly type: typeof FORGOT_PASSWORD_FORM_SUBMIT;
}

export interface IForgotPasswordSuccessAction {
  readonly type: typeof FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS;
}

export interface IForgotPasswordFailedAction {
  readonly type: typeof FORGOT_PASSWORD_FORM_SUBMIT_FAILED;
}

export interface IForgotPasswordResetAction {
  readonly type: typeof FORGOT_PASSWORD_RESET;
}

export type TForgotPasswordActions =
  | IForgotPasswordAction
  | IForgotPasswordSuccessAction
  | IForgotPasswordFailedAction
  | IForgotPasswordResetAction;

export const forgotPasswordAction = (): IForgotPasswordAction => ({
  type: FORGOT_PASSWORD_FORM_SUBMIT,
});

export const forgotPasswordSuccessAction = (): IForgotPasswordSuccessAction => ({
  type: FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
});

export const forgotPasswordFailedAction = (): IForgotPasswordFailedAction => ({
  type: FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
});

export const forgotPasswordResetAction = (): IForgotPasswordResetAction => ({
  type: FORGOT_PASSWORD_RESET,
});

export const forgotPasswordThunk: AppThunk = (form) => (dispatch: AppDispatch) => {
  dispatch(forgotPasswordAction());
  api.forgotPassword(form)
    .then(() => {
      dispatch(forgotPasswordSuccessAction());
    })
    .catch((err) => {
      dispatch(forgotPasswordFailedAction());
      console.log(err);
    })
};