import {
  REGISTER_FORM_SUBMIT,
  REGISTER_FORM_SUBMIT_SUCCESS,
  REGISTER_FORM_SUBMIT_FAILED,
} from "../actions/register";

const initialState = {
  registerRequest: false,
  registerFailed: false,
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_FORM_SUBMIT: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
      }
    }
    case REGISTER_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
      }
    }
    case REGISTER_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true,
      }
    }
    default: {
      return state;
    }
  }
};
