import {BASE_URL, ENDPOINT, TOKEN} from "./constants";
import {getCookie} from "./utils";

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json()
      .then((err) => {
        const error = new Error(err.message);
        error.status = err.status;
        error.message = err.message;
        throw error;
      })
  }
};

export const getIngredientsRequest = () => {
  return fetch(`${BASE_URL}/ingredients`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(getResponse)
};

export const placeOrder = ({ ingredients }) => {
  return fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Authorization": getCookie(TOKEN.ACCESS),
    },
    body: JSON.stringify({ ingredients }),
  })
    .then(getResponse)
};

export const login = ({ email, password }) => {
  return fetch(BASE_URL + ENDPOINT.LOGIN, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password }),
  })
    .then(getResponse)
};

export const register = ({ name, email, password}) => {
  return fetch(BASE_URL + ENDPOINT.REGISTER, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then(getResponse)
};

export const forgotPassword = ({ email }) => {
  return fetch(BASE_URL + ENDPOINT.FORGOT_PASSWORD, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email }),
  })
    .then(getResponse)
};

export const resetPassword = ({ token, password }) => {
  return fetch(BASE_URL + ENDPOINT.RESET_PASSWORD, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ token, password }),
  })
    .then(getResponse)
};

export const getUser = () => {
  return fetch(BASE_URL + ENDPOINT.USER, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": getCookie(TOKEN.ACCESS),
    },
  })
    .then(getResponse)
};

export const updateUser = ({ name, email, password}) => {
  return fetch(BASE_URL + ENDPOINT.USER, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      "Authorization": getCookie(TOKEN.ACCESS),
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then(getResponse)
};

export const refreshToken = () => {
  return fetch(BASE_URL + ENDPOINT.REFRESH_TOKEN, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: localStorage.getItem(TOKEN.REFRESH) }),
  })
    .then(getResponse)
};

export const logout = () => {
  return fetch(BASE_URL + ENDPOINT.LOGOUT, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: localStorage.getItem(TOKEN.REFRESH) }),
  })
    .then(getResponse)
};