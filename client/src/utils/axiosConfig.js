const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage.token}`,
    Accept: "application/json",
  },
  responseType: "json",
  timeout: 5000, // specifies the number of milliseconds before the request times out
};
