import axios from "axios";
import { API, PROPERTIES } from "../constants/routes";

export const makeApi = () => {
  return axios.create({
    baseURL: `${API}${PROPERTIES}`,
  });
};

export const getProperties = (api = makeApi()) => {
  return api.get(``);
};

export const getProperty = (propertyId, api = makeApi()) => {
  return api.get(`/${propertyId}`);
};

export const getSearchedProperties = (searchedProperties, api = makeApi()) => {
  return api.get(`/?q=${searchedProperties}`);
};
// export const getUrl = (url, api = makeApi()) => {
//   return api.get(url);
// };

export const getPropertiesByCity = (city, api = makeApi()) => {
  // api.get(`?city=${city}`).then((response) => {
  //   console.log(response, "response");
  //   return response;
  // });
  const cityTest = api.get(`?city=${city}`);
  return cityTest;
};
