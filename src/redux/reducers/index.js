import { combineReducers } from "redux";

import cities from "./citiesReducer";
import flights from "./flightReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  cities,
  flights,
  apiCallsInProgress,
});

export default rootReducer;
