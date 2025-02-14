import { GET_PROPERTIES, GET_SEARCHED_PROPERTIES } from "./types";
import { getProperties, getPropertiesByCity } from "../../apis/properties";

export const getAllProperties = () => {
  return async (dispatch) => {
    const result = await getProperties();
    dispatch({ type: GET_PROPERTIES, payload: result.data.data });
  };
};

export const getSearchedPropertiesByCity = (searchedCity) => {
  return async (dispatch) => {
    const data = await getPropertiesByCity(searchedCity);
    dispatch({ type: GET_SEARCHED_PROPERTIES, payload: data.data.data });
  };
};
