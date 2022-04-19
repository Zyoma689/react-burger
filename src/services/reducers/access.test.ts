import { accessReducer, initialState } from "./access";
import {
  EDIT_PROFILE_FORM_SUBMIT,
  EDIT_PROFILE_FORM_SUBMIT_FAILED,
  EDIT_PROFILE_FORM_SUBMIT_SUCCESS,
  FORGOT_PASSWORD_FORM_SUBMIT,
  FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
  FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FORM_SUBMIT,
  LOGIN_FORM_SUBMIT_FAILED,
  LOGIN_FORM_SUBMIT_SUCCESS, LOGOUT_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REFRESH_TOKEN_FAILED,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REGISTER_FORM_SUBMIT,
  REGISTER_FORM_SUBMIT_FAILED,
  REGISTER_FORM_SUBMIT_SUCCESS,
  RESET_PASSWORD_FORM_SUBMIT,
  RESET_PASSWORD_FORM_SUBMIT_FAILED, RESET_PASSWORD_FORM_SUBMIT_SUCCESS
} from "../constants";

describe('accessReducer', () => {
  it('Должен вернуть initialState', () => {
    expect(accessReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('REGISTER_FORM_SUBMIT', () => {
    const action = {
      type: REGISTER_FORM_SUBMIT,
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      registerRequest: true,
      registerFailed: false,
    });
  });

  it('REGISTER_FORM_SUBMIT_SUCCESS', () => {
    const action = {
      type: REGISTER_FORM_SUBMIT_SUCCESS,
      user: {
        name: 'name',
        email: '',
      }
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      registerRequest: false,
      user: {
        ...initialState.user,
        name: action.user.name,
        email: action.user.email,
      },
      isAuthenticated: true,
    });
  });

  it('REGISTER_FORM_SUBMIT_FAILED', () => {
    const action = {
      type: REGISTER_FORM_SUBMIT_FAILED,
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      registerRequest: false,
      registerFailed: true,
    });
  });

  it('LOGIN_FORM_SUBMIT', () => {
    const action = {
      type: LOGIN_FORM_SUBMIT,
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      loginRequest: true,
      loginFailed: false,
    })
  });

  it('LOGIN_FORM_SUBMIT_SUCCESS', () => {
    const action = {
      type: LOGIN_FORM_SUBMIT_SUCCESS,
      user: {
        name: '',
        email: '',
      }
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      loginRequest: false,
      user: {
        ...initialState.user,
        name: action.user.name,
        email: action.user.email,
      },
      isAuthenticated: true,
    });
  });

  it('LOGIN_FORM_SUBMIT_FAILED', () => {
    const action = {
      type: LOGIN_FORM_SUBMIT_FAILED,
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      loginRequest: false,
      loginFailed: true,
    })
  });

  it('FORGOT_PASSWORD_FORM_SUBMIT', () => {
    const action = {
      type: FORGOT_PASSWORD_FORM_SUBMIT,
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      forgotPasswordRequest: true,
      forgotPasswordFailed: false,
      forgotPasswordSuccess: false,
    })
  });

  it('FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS', () => {
    const action = {
      type: FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      forgotPasswordRequest: false,
      forgotPasswordSuccess: true,
    });
  });

  it('FORGOT_PASSWORD_FORM_SUBMIT_FAILED', () => {
    const action = {
      type: FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      forgotPasswordRequest: false,
      forgotPasswordFailed: true,
    })
  });

  it('RESET_PASSWORD_FORM_SUBMIT', () => {
    const action = {
      type: RESET_PASSWORD_FORM_SUBMIT,
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      resetPasswordRequest: true,
      resetPasswordFailed: false,
      resetPasswordSuccess: false,
    })
  });

  it('RESET_PASSWORD_FORM_SUBMIT_SUCCESS', () => {
    const action = {
      type: RESET_PASSWORD_FORM_SUBMIT_SUCCESS,
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordSuccess: true,
    });
  });

  it('RESET_PASSWORD_FORM_SUBMIT_FAILED', () => {
    const action = {
      type: RESET_PASSWORD_FORM_SUBMIT_FAILED,
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordFailed: true,
    })
  });

  it('EDIT_PROFILE_FORM_SUBMIT', () => {
    const action = {
      type: EDIT_PROFILE_FORM_SUBMIT,
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      editProfileRequest: true,
      editProfileFailed: false,
    })
  });

  it('EDIT_PROFILE_FORM_SUBMIT_SUCCESS', () => {
    const action = {
      type: EDIT_PROFILE_FORM_SUBMIT_SUCCESS,
      user: {
        name: '',
        email: '',
      }
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      editProfileRequest: false,
      user: {
        ...initialState.user,
        name: action.user.name,
        email: action.user.email,
      }
    });
  });

  it('EDIT_PROFILE_FORM_SUBMIT_FAILED', () => {
    const action = {
      type: EDIT_PROFILE_FORM_SUBMIT_FAILED,
      message: '',
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      editProfileRequest: false,
      editProfileFailed: true,
    })
  });

  it('GET_USER_REQUEST', () => {
    const action = {
      type: GET_USER_REQUEST,
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      getUserRequest: true,
      getUserFailed: false,
    })
  });

  it('GET_USER_SUCCESS', () => {
    const action = {
      type: GET_USER_SUCCESS,
      user: {
        name: '',
        email: '',
      }
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      getUserRequest: false,
      isAuthenticated: true,
      user: {
        ...initialState.user,
        name: action.user.name,
        email: action.user.email,
      }
    });
  });

  it('GET_USER_FAILED', () => {
    const action = {
      type: GET_USER_FAILED,
      message: ''
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      getUserRequest: false,
      getUserFailed: true,
      isAuthenticated: false,
    })
  });

  it('REFRESH_TOKEN_REQUEST', () => {
    const action = {
      type: REFRESH_TOKEN_REQUEST,
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      refreshTokenRequest: true,
      refreshTokenFailed: false,
      getUserFailed: false,
      editProfileFailed: false,
    })
  });

  it('REFRESH_TOKEN_SUCCESS', () => {
    const action = {
      type: REFRESH_TOKEN_SUCCESS,
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      refreshTokenRequest: false,
      isAuthenticated: true
    });
  });

  it('REFRESH_TOKEN_FAILED', () => {
    const action = {
      type: REFRESH_TOKEN_FAILED,
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      refreshTokenRequest: false,
      refreshTokenFailed: true,
      isAuthenticated: false,
    })
  });

  it('LOGOUT_REQUEST', () => {
    const action = {
      type: LOGOUT_REQUEST,
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      isAuthenticated: false,
      logoutRequest: true,
      logoutFailed: false,
    })
  });

  it('LOGOUT_SUCCESS', () => {
    const action = {
      type: LOGOUT_SUCCESS,
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      logoutRequest: false,
    });
  });

  it('LOGOUT_FAILED', () => {
    const action = {
      type: LOGOUT_FAILED,
    };
    expect(accessReducer(initialState, action)).toEqual({
      ...initialState,
      logoutRequest: false,
      logoutFailed: true,
    })
  });
});