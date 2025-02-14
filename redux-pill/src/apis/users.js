import axios from "axios";
import { API, USERS } from "../constants/routes";

export const makeApi = () => {
  return axios.create({
    baseURL: `${API}${USERS}`,
  });
};

export const getUsers = (api = makeApi()) => {
  return api.get(`/`);
};

export const getUser = (userId, api = makeApi()) => {
  return api.get(`/${userId}`);
};
export const signIn = (email, password, api = makeApi()) => {
  return api.get(`/?email=${email}&password=${password}`);
};
// export const getUrl = (url, api = makeApi()) => {
//   return api.get(url);
// };
