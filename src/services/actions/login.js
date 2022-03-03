// export const LOGIN_FORM_SET_VALUE = 'LOGIN_FORM_SET_VALUE';

import { login } from "../../utils/api";

export const LOGIN_FORM_SUBMIT = 'LOGIN_FORM_SUBMIT';
export const LOGIN_FORM_SUBMIT_SUCCESS = 'LOGIN_FORM_SUBMIT_SUCCESS';
export const LOGIN_FORM_SUBMIT_FAILED = 'LOGIN_FORM_SUBMIT_FAILED';

// export const setLoginFormValue = (field, value) => ({
//   type: LOGIN_FORM_SET_VALUE,
//   field,
//   value
// });

// export const login = (form) => (dispatch) => {
//   dispatch({
//     type: LOGIN_FORM_SUBMIT,
//   });
//   login(form)
//     .then((data) => {
//       dispatch({
//         type: LOGIN_FORM_SUBMIT_SUCCESS,
//       });
//       console.log(data);
//     })
//     .catch((err) => {
//       dispatch({
//         type: LOGIN_FORM_SUBMIT_FAILED,
//       });
//       console.log(err);
//     })
// };

export function loginAction(form) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_FORM_SUBMIT,
    });
    login(form)
      .then((data) => {
        dispatch({
          type: LOGIN_FORM_SUBMIT_SUCCESS,
        });
        console.log(data);
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FORM_SUBMIT_FAILED,
        });
        console.log(err);
      })
  }
}