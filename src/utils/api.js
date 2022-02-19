import { BASE_URL } from "./constants";

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
    }
  })
    .then(getResponse)
};

export const placeOrder = ({ ingredients }) => {
  return fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ingredients })
  })
    .then(getResponse)
};