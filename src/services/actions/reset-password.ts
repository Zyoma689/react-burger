import * as api from "../../utils/api";
import {
  RESET_PASSWORD_FORM_SUBMIT,
  RESET_PASSWORD_FORM_SUBMIT_FAILED,
  RESET_PASSWORD_FORM_SUBMIT_SUCCESS
} from "../constants";
import {AppDispatch, AppThunk} from "../types";

export interface IResetPasswordAction {
  readonly type: typeof RESET_PASSWORD_FORM_SUBMIT,
}

export interface IResetPasswordSuccessAction {
  readonly type: typeof RESET_PASSWORD_FORM_SUBMIT_SUCCESS,
}

export interface IResetPasswordFailedAction {
  readonly type: typeof RESET_PASSWORD_FORM_SUBMIT_FAILED,
}

export type TResetPasswordActions =
  | IResetPasswordAction
  | IResetPasswordSuccessAction
  | IResetPasswordFailedAction;

export const resetPasswordAction = (): IResetPasswordAction => ({
  type: RESET_PASSWORD_FORM_SUBMIT,
});

export const resetPasswordSuccessAction = (): IResetPasswordSuccessAction => ({
  type: RESET_PASSWORD_FORM_SUBMIT_SUCCESS,
});

export const resetPasswordFailedAction = (): IResetPasswordFailedAction => ({
  type: RESET_PASSWORD_FORM_SUBMIT_FAILED,
});

export const resetPassword: AppThunk = (form) => (dispatch: AppDispatch) =>{
  dispatch(resetPasswordAction());
  api.resetPassword(form)
    .then(() => {
      dispatch(resetPasswordSuccessAction());
    })
    .catch((err) => {
      dispatch(resetPasswordFailedAction());
      console.log(err);
    })
};