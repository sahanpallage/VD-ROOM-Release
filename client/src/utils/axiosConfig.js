const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const token = getTokenFromLocalStorage ? getTokenFromLocalStorage.token : null;

export const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  },
  // specifies the number of milliseconds before the request times out
};
