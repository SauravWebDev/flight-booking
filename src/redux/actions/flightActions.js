import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusAction";

import { getFlightData, filters } from "../../apis";

function setFlightData(data) {
  let payload = data;

  return { type: types.LOAD_FLIGHTS_SUCCESS, payload };
}

export function getAllFlights(offset) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return getFlightData(offset)
      .then((flights) => {
        dispatch(setFlightData(flights));
      })
      .catch((e) => {
        console.log("Error in getCities ", e);
        let err = new Error();
        err.msg = "Error in fetching Cities";
        dispatch(apiCallError(err));
        throw err;
      });
  };
}

export function filterFlight(data) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return filters(data)
      .then((flights) => {
        dispatch(setFlightData(flights));
      })
      .catch((e) => {
        console.log("Error in getCities ", e);
        let err = new Error();
        err.msg = "Error in fetching Cities";
        dispatch(apiCallError(err));
        throw err;
      });
  };
}
