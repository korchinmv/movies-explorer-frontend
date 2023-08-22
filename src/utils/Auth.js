import { BASE_URL } from "../utils/variables";

const makeRequest = (url, method, body, token) => {
  const headers = { "Content-Type": "application/json" };
  const config = { method, headers };

  if (token !== undefined) headers["Authorization"] = `Bearer ${token}`;
  if (body !== undefined) config.body = JSON.stringify(body);

  return fetch(`${BASE_URL}${url}`, config).then((res) => {
    if (res.ok) {
      return res.json();
    }
    console.log(`Ошибка: код ${res.status}`);
    return res.text().then((text) => {
      let errorText = JSON.parse(text);
      return Promise.reject(errorText.message);
    });
  });
};

export const registerUser = (name, email, password) => {
  return makeRequest("/signup", "POST", { name, email, password });
};

export const authorizeUser = (email, password) => {
  return makeRequest("/signin", "POST", { email, password });
};

export const getUserData = (token) => {
  return makeRequest("/users/me", "GET", undefined, token);
};
