const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Error: ${res.status}`);
};

export const getClothingItems = () => {
  return fetch(`${baseUrl}/clothing-items`).then(checkResponse);
};

export const createClothingItem = (item) => {
  return fetch(`${baseUrl}/clothing-items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then(checkResponse);
};

export const deleteClothingItem = (itemId) => {
  return fetch(`${baseUrl}/clothing-items/${itemId}`, {
    method: "DELETE",
  }).then(checkResponse);
};
