import * as api from "../../utils/api";
import {ERROR, TOKEN} from "../../utils/constants";
import {deleteCookie, setCookie} from "../../utils/utils";
import {
  EDIT_PROFILE_FORM_SUBMIT,
  EDIT_PROFILE_FORM_SUBMIT_FAILED,
  EDIT_PROFILE_FORM_SUBMIT_SUCCESS,
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REFRESH_TOKEN_FAILED,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS
} from "../constants";
import {TUserData} from "../../types";
import {AppDispatch, AppThunk} from "../types";

export interface IEditProfileAction {
  readonly type: typeof EDIT_PROFILE_FORM_SUBMIT;
}

export interface IEditProfileSuccessAction {
  readonly type: typeof EDIT_PROFILE_FORM_SUBMIT_SUCCESS;
  readonly user: TUserData;
}

export interface IEditProfileFailedAction {
  readonly type: typeof EDIT_PROFILE_FORM_SUBMIT_FAILED;
  readonly message: string;
}

export interface IGetUserAction {
  readonly type: typeof GET_USER_REQUEST;
}

export interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: TUserData;
}

export interface IGetUserFailedAction {
  readonly type: typeof GET_USER_FAILED;
  readonly message: string;
}

export interface IRefreshTokenAction {
  readonly type: typeof REFRESH_TOKEN_REQUEST;
}

export interface IRefreshTokenSuccessAction {
  readonly type: typeof REFRESH_TOKEN_SUCCESS;
}

export interface IRefreshTokenFailedAction {
  readonly type: typeof REFRESH_TOKEN_FAILED;
}

export interface ILogoutAction {
  readonly type: typeof LOGOUT_REQUEST;
}

export interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
}

export interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_FAILED;
}

export type TProfileActions =
  | IEditProfileAction
  | IEditProfileSuccessAction
  | IEditProfileFailedAction
  | IGetUserAction
  | IGetUserSuccessAction
  | IGetUserFailedAction
  | IRefreshTokenAction
  | IRefreshTokenSuccessAction
  | IRefreshTokenFailedAction
  | ILogoutAction
  | ILogoutSuccessAction
  | ILogoutFailedAction;

export const editProfileAction = (): IEditProfileAction => ({
  type: EDIT_PROFILE_FORM_SUBMIT,
});

export const editProfileSuccessAction = (user: TUserData): IEditProfileSuccessAction => ({
  type: EDIT_PROFILE_FORM_SUBMIT_SUCCESS,
  user,
});

export const editProfileFailedAction = (message: string): IEditProfileFailedAction => ({
  type: EDIT_PROFILE_FORM_SUBMIT_FAILED,
  message,
});

export const editProfileThunk: AppThunk = (form) => (dispatch: AppDispatch | AppThunk) => {
  dispatch(editProfileAction());
  api.updateUser(form)
    .then((data) => {
      dispatch(editProfileSuccessAction(data.user));
    })
    .catch((err) => {
      if (err.message === ERROR.JWT_EXPIRED) {
        dispatch(refreshTokenThunk());
      } else {
        dispatch(editProfileFailedAction(err.message));
      }
    })
};

export const getUserAction = (): IGetUserAction => ({
  type: GET_USER_REQUEST,
});

export const getUserSuccessAction = (user: TUserData): IGetUserSuccessAction => ({
  type: GET_USER_SUCCESS,
  user,
});

export const getUserFailedAction = (message: string): IGetUserFailedAction => ({
  type: GET_USER_FAILED,
  message,
});

export const getUserThunk: AppThunk = () => (dispatch: AppDispatch | AppThunk) => {
  dispatch(getUserAction());
  api.getUser()
    .then((data) => {
      dispatch(getUserSuccessAction(data.user));
    })
    .catch((err) => {
      if (err.message === ERROR.JWT_EXPIRED) {
        dispatch(refreshTokenThunk());
      } else {
        dispatch(getUserFailedAction(err.message));
      }
    })
};

export const refreshTokenAction = (): IRefreshTokenAction => ({
  type: REFRESH_TOKEN_REQUEST,
});

export const refreshTokenSuccessAction = (): IRefreshTokenSuccessAction => ({
  type: REFRESH_TOKEN_SUCCESS,
});

export const refreshTokenFailedAction = (): IRefreshTokenFailedAction => ({
  type: REFRESH_TOKEN_FAILED,
});

export const refreshTokenThunk: AppThunk = () => (dispatch: AppDispatch | AppThunk) => {
  dispatch(refreshTokenAction());
  api.refreshToken()
    .then((data) => {
      dispatch(refreshTokenSuccessAction());
      deleteCookie(TOKEN.ACCESS);
      localStorage.removeItem(TOKEN.REFRESH);

      setCookie(TOKEN.ACCESS, data.accessToken);
      localStorage.setItem(TOKEN.REFRESH, data.refreshToken);
    })
    .catch((err) => {
      dispatch(refreshTokenFailedAction());
      console.log(err);
    })
};

export const logoutAction = (): ILogoutAction => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccessAction = (): ILogoutSuccessAction => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFailedAction = (): ILogoutFailedAction => ({
  type: LOGOUT_FAILED,
});

export const logoutThunk: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(logoutAction());
  api.logout()
    .then(() => {
      dispatch(logoutSuccessAction());
      deleteCookie(TOKEN.ACCESS);
      localStorage.removeItem(TOKEN.REFRESH);
    })
    .catch((err) => {
      dispatch(logoutFailedAction());
      console.log(err);
    })
};