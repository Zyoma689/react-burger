import * as api from "../../utils/api";
import {ERROR, TOKEN} from "../../utils/constants";
import {deleteCookie, setCookie} from "../../utils/utils";

export const EDIT_PROFILE_FORM_SUBMIT = 'EDIT_PROFILE_FORM_SUBMIT';
export const EDIT_PROFILE_FORM_SUBMIT_SUCCESS = 'EDIT_PROFILE_FORM_SUBMIT_SUCCESS';
export const EDIT_PROFILE_FORM_SUBMIT_FAILED = 'EDIT_PROFILE_FORM_SUBMIT_FAILED';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILED = 'REFRESH_TOKEN_FAILED';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';


export function editProfile(form) {
  return function (dispatch) {
    dispatch({
      type: EDIT_PROFILE_FORM_SUBMIT,
    });
    api.updateUser(form)
      .then((data) => {
        dispatch({
          type: EDIT_PROFILE_FORM_SUBMIT_SUCCESS,
          user: data.user,
        });
      })
      .catch((err) => {
        if (err.message === ERROR.JWT_EXPIRED) {
          dispatch(refreshToken());
        } else {
          dispatch({
            type: EDIT_PROFILE_FORM_SUBMIT_FAILED,
            message: err.message,
          });
        }
      })
  }
}

export function getUser() {
  return function (dispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    api.getUser()
      .then((data) => {
        dispatch({
          type: GET_USER_SUCCESS,
          user: data.user,
        })
      })
      .catch((err) => {
        if (err.message === ERROR.JWT_EXPIRED) {
          dispatch(refreshToken());
        } else {
          dispatch({
            type: GET_USER_FAILED,
            message: err.message,
          });
        }
      })
  }
}

export function refreshToken() {
  return function (dispatch) {
    dispatch({
      type: REFRESH_TOKEN_REQUEST,
    });
    api.refreshToken()
      .then((data) => {
        dispatch({
          type: REFRESH_TOKEN_SUCCESS,
        });
        deleteCookie(TOKEN.ACCESS);
        localStorage.removeItem(TOKEN.REFRESH);

        setCookie(TOKEN.ACCESS, data.accessToken);
        localStorage.setItem(TOKEN.REFRESH, data.refreshToken);
      })
      .catch((err) => {
        dispatch({
          type: REFRESH_TOKEN_FAILED,
        });
        console.log(err);
      })
  }
}

export function logout() {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    api.logout()
      .then(() => {
        dispatch({
          type: LOGOUT_SUCCESS,
        });
        deleteCookie(TOKEN.ACCESS);
        localStorage.removeItem(TOKEN.REFRESH);
      })
      .catch((err) => {
        dispatch({
          type: LOGOUT_FAILED,
        });
        console.log(err);
      })
  }
}