import * as api from "../../utils/api";
import {setCookie} from "../../utils/utils";
import {TOKEN} from "../../utils/constants";
import {REGISTER_FORM_SUBMIT, REGISTER_FORM_SUBMIT_FAILED, REGISTER_FORM_SUBMIT_SUCCESS} from "../constants";
import {TUserData} from "../../types";
import {AppDispatch, AppThunk} from "../types";

export interface IRegisterAction {
  readonly type: typeof REGISTER_FORM_SUBMIT;
}

export interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_FORM_SUBMIT_SUCCESS;
  readonly user: TUserData;
}

export interface IRegisterFailedAction {
  readonly type: typeof REGISTER_FORM_SUBMIT_FAILED;
}

export type TRegisterActions =
  | IRegisterAction
  | IRegisterSuccessAction
  | IRegisterFailedAction;

export const registerAction = (): IRegisterAction => ({
  type: REGISTER_FORM_SUBMIT,
});

export const registerSuccessAction = (user: TUserData): IRegisterSuccessAction => ({
  type: REGISTER_FORM_SUBMIT_SUCCESS,
  user,
});

export const registerFailedAction = (): IRegisterFailedAction => ({
  type: REGISTER_FORM_SUBMIT_FAILED,
});

export const register: AppThunk = (form) => (dispatch: AppDispatch) => {
  dispatch(registerAction());
  api.register(form)
    .then((data) => {
      dispatch(registerSuccessAction(data.user));
      setCookie(TOKEN.ACCESS, data.accessToken);
      localStorage.setItem(TOKEN.REFRESH, data.refreshToken);
    })
    .catch((err) => {
      dispatch(registerFailedAction());
      console.log(err);
    })
};