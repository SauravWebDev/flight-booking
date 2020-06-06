import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function FlightReducer(state = initialState.flights, action) {
  switch (action.type) {
    case types.LOAD_FLIGHTS_SUCCESS: {
      return { ...action.payload };
    }
    default:
      return state;
  }
}
