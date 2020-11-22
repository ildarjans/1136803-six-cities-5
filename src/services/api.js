import axios from "axios";

const URL = `https://5.react.pages.academy/six-cities`;
const TIMEOUT = 5000;
const HttpCode = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
