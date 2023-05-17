import axios from "axios";

export const setTokenInLocalStorage = (tokenName: string, token: string): void => {
  localStorage.setItem(tokenName, token);
};

export const setTokenInHeaders = (tokenName: string): void => {
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem(tokenName);
};
