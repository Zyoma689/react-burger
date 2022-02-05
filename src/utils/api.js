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

export const getIngredients = () => {
  return fetch(`${BASE_URL}/ingredients`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(getResponse)
};