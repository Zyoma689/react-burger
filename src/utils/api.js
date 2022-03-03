import {BASE_URL, ENDPOINT} from "./constants";

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json()
      .then((err) => {
        const error = new Error(err.message);
        error.status = res.status;
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
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ingredients }),
  })
    .then(getResponse)
};

export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/auth/login`, {
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