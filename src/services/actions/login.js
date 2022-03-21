import * as api from "../../utils/api";
import {TOKEN} from "../../utils/constants";
import {setCookie} from "../../utils/utils";

export const LOGIN_FORM_SUBMIT = 'LOGIN_FORM_SUBMIT';
export const LOGIN_FORM_SUBMIT_SUCCESS = 'LOGIN_FORM_SUBMIT_SUCCESS';
export const LOGIN_FORM_SUBMIT_FAILED = 'LOGIN_FORM_SUBMIT_FAILED';

export function login(form) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_FORM_SUBMIT,
    });
    api.login(form)
      .then((data) => {
        dispatch({
          type: LOGIN_FORM_SUBMIT_SUCCESS,
          user: data.user,
        });

        setCookie(TOKEN.ACCESS, data.accessToken);
        localStorage.setItem(TOKEN.REFRESH, data.refreshToken);
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FORM_SUBMIT_FAILED,
        });
        console.log(err);
      })
  }
}