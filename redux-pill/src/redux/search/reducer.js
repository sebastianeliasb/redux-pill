import { GET_PROPERTIES, GET_SEARCHED_PROPERTIES } from "./types";

import INITIAL_STATE from "./state";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PROPERTIES: {
      return { ...state, properties: action.payload };
    }
    case GET_SEARCHED_PROPERTIES: {
      return { ...state, properties: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
