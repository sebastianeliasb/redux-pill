import axios from "axios";
import { API, PROPERTIES } from "../constants/routes";

export const makeApi = () => {
  return axios.create({
    baseURL: `${API}${PROPERTIES}`,
  });
};

export const getProperties = (api = makeApi()) => {
  return api.get(`/`);
};

export const getProperty = (propertyId, api = makeApi()) => {
  return api.get(`/${propertyId}`);
};

// export const getUrl = (url, api = makeApi()) => {
//   return api.get(url);
// };
