import { GET_PROPERTIES, GET_SEARCHED_PROPERTIES } from "./types";
import { getProperties, getSearchedProperties } from "../../apis/properties";

export const getAllProperties = () => {
  return async (dispatch) => {
    const result = await getProperties();
    dispatch({ type: GET_PROPERTIES, payload: result });
  };
};

export const getAllSearchedProperties = (searchedProperties) => {
  return async (dispatch) => {
    const data = await getSearchedProperties(searchedProperties);
    console.log(data);
    dispatch({ type: GET_SEARCHED_PROPERTIES, payload: data.data });
  };
};
