import { GET_FILTERS } from "./types";
import { getPropertiesByFilter } from "../../apis/properties";
import INITIAL_STATE from "./state";

export const getFilteredProperties = (searchedFilter) => {
  // console.log(searchedFilter.type, "searched filter");
  let string = "";

  console.log(searchedFilter, "actions ===========================");
  searchedFilter.filter.map((item) => {
    for (const [key, value] of Object.entries(item)) {
      if (
        INITIAL_STATE.hasOwnProperty(key) &&
        key !== "filter" &&
        value !== "" &&
        value !== false &&
        value !== 0
      ) {
        string += `${key}=${value}&`;
      }
    }
  });

  console.log(string);
  return async (dispatch) => {
    const result = await getPropertiesByFilter(string);
    dispatch({ type: GET_FILTERS, payload: searchedFilter });
  };
};
