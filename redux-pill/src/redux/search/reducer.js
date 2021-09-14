import { GET_PROPERTIES, GET_SEARCHED_PROPERTIES } from "./types";

import INITIAL_STATE from "./state";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PROPERTIES:
      {
        return { ...state, allProperties: action.payload };
      }
      break;
    case GET_SEARCHED_PROPERTIES:
      {
        return { ...state, properties: action.payload };
      }
      break;
    default: {
      return state;
    }
  }
};

export default reducer;
