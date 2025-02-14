import { combineReducers } from "redux";
import filterReducer from "./filter/reducer";
import searchReducer from "./search/reducer";

const rootReducer = combineReducers({
  filters: filterReducer,
  search: searchReducer,
});

export default rootReducer;
