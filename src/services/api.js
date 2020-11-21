import axios from "axios";

const URL = `https://5.react.pages.academy/six-cities`;
const TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
