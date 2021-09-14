import { GET_FILTERED_ARRAY, GET_FILTERS } from "./types";

import INITIAL_STATE from "./state";

const reducer = (
  state = INITIAL_STATE,
  action,
  { properties } = INITIAL_STATE
) => {
  switch (action.type) {
    case GET_FILTERS:
      {
        return { ...state, state: action.payload };
      }
      break;
    case GET_FILTERED_ARRAY:
      {
        return { ...properties, properties: action.payload };
      }
      break;
    default: {
      return state;
    }
  }
};

export default reducer;
