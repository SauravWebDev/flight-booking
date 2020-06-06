import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusAction";

import { getCities as citiesApi } from "../../apis";

function setCitiesData(data) {
  let payload = data;

  return { type: types.LOAD_CITIES_SUCCESS, payload };
}

export function getAllCity() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return citiesApi()
      .then((Cities) => {
        dispatch(setCitiesData(Cities));
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
