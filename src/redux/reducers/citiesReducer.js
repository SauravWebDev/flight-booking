import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function CitiesReducer(state = initialState.cities, action) {
  switch (action.type) {
    case types.LOAD_CITIES_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
}
