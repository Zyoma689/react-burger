import * as api from "../../utils/api";

export const REGISTER_FORM_SUBMIT = 'REGISTER_FORM_SUBMIT';
export const REGISTER_FORM_SUBMIT_SUCCESS = 'REGISTER_FORM_SUBMIT_SUCCESS';
export const REGISTER_FORM_SUBMIT_FAILED = 'REGISTER_FORM_SUBMIT_FAILED';

export function register(form) {
  return function (dispatch) {
    dispatch({
      type: REGISTER_FORM_SUBMIT,
    });
    api.register(form)
      .then((data) => {
        dispatch({
          type: REGISTER_FORM_SUBMIT_SUCCESS,
        });
        console.log(data);
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FORM_SUBMIT_FAILED,
        });
        console.log(err);
      })
  }
}