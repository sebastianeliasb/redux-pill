import { GET_PROPERTIES, GET_SEARCHED_PROPERTIES } from "./types";
import {
  getProperties,
  getPropertiesByCity,
  // getSearchedProperties,
} from "../../apis/properties";

export const getAllProperties = () => {
  return async (dispatch) => {
    const result = await getProperties();
    console.log(result);
    dispatch({ type: GET_PROPERTIES, payload: result.data.data });
  };
};

export const getSearchedPropertiesByCity = (searchedCity) => {
  return async (dispatch) => {
    const data = await getPropertiesByCity(searchedCity);
    console.log(data, "ACTION");
    dispatch({ type: GET_SEARCHED_PROPERTIES, payload: data.data.data });
  };
};
