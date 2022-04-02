import * as api from "../../utils/api";
import {TOKEN} from "../../utils/constants";
import {setCookie} from "../../utils/utils";
import {LOGIN_FORM_SUBMIT, LOGIN_FORM_SUBMIT_FAILED, LOGIN_FORM_SUBMIT_SUCCESS} from "../constants";
import {TUserData} from "../../types";
import {AppDispatch, AppThunk} from "../types";


export interface ILoginAction {
  readonly type: typeof LOGIN_FORM_SUBMIT;
}

export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_FORM_SUBMIT_SUCCESS;
  readonly user: TUserData;
}

export interface ILoginFailedAction {
  readonly type: typeof LOGIN_FORM_SUBMIT_FAILED;
}

export type TLoginActions =
  | ILoginAction
  | ILoginSuccessAction
  | ILoginFailedAction;

export const loginAction = (): ILoginAction => ({
  type: LOGIN_FORM_SUBMIT,
});

export const loginSuccessAction = (user: TUserData): ILoginSuccessAction => ({
  type: LOGIN_FORM_SUBMIT_SUCCESS,
  user,
});

export const loginFailedAction = (): ILoginFailedAction => ({
  type: LOGIN_FORM_SUBMIT_FAILED,
});

export const loginThunk: AppThunk = (form) => (dispatch: AppDispatch) => {
  dispatch(loginAction());
  api.login(form)
    .then((data) => {
      dispatch(loginSuccessAction(data.user));
      setCookie(TOKEN.ACCESS, data.accessToken);
      localStorage.setItem(TOKEN.REFRESH, data.refreshToken);
    })
    .catch((err) => {
      dispatch(loginFailedAction());
      console.log(err);
    })
};