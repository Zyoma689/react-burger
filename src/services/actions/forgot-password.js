import * as api from "../../utils/api";

export const FORGOT_PASSWORD_FORM_SUBMIT = 'FORGOT_PASSWORD_FORM_SUBMIT';
export const FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS = 'FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS';
export const FORGOT_PASSWORD_FORM_SUBMIT_FAILED = 'FORGOT_PASSWORD_FORM_SUBMIT_FAILED';

export function forgotPassword(form) {
  return function (dispatch) {
    dispatch({
      type: FORGOT_PASSWORD_FORM_SUBMIT,
    });
    api.forgotPassword(form)
      .then((data) => {
        dispatch({
          type: FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
        });
        console.log(data);
      })
      .catch((err) => {
        dispatch({
          type: FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
        });
        console.log(err);
      })
  }
}