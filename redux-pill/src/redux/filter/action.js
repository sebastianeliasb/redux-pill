import { GET_FILTERS, GET_FILTERED_ARRAY } from "./types";
import { getPropertiesByFilter } from "../../apis/properties";
import { buildParamsURL } from "../../utils/stringSetter";

export const getFilteredProperties = (searchedFilter) => {
  let string = buildParamsURL(searchedFilter);

  return async (dispatch) => {
    await getPropertiesByFilter(string);

    dispatch({ type: GET_FILTERS, payload: searchedFilter });
  };
};

export const getFilteredArray = (properties) => {
  return async (dispatch) => {
    dispatch({ type: GET_FILTERED_ARRAY, payload: properties });
  };
};
