import { GET_FILTERS } from "./types";
import { getPropertiesByFilter } from "../../apis/properties";

export const getFilteredProperties = () => {
  return async (dispatch) => {
    const result = await getPropertiesByFilter();
    dispatch({ type: GET_FILTERS, payload: result });
  };
};
