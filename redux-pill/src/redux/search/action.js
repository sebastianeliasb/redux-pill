import { GET_PROPERTIES } from "./types";
import { getProperties } from "../../apis/properties";

export const getAllProperties = () => {
  return async (dispatch) => {
    const result = await getProperties();
    dispatch({ type: GET_PROPERTIES, payload: result });
  };
};
