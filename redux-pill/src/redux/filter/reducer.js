import { GET_FILTERS } from "./types";

import INITIAL_STATE from "./state";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FILTERS: {
      return { ...state, ...action.payload };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
