import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Forecast Input
export const saveInput = (newEntry, history) => (dispatch) => {
  axios
    .post("/api/cinput/register", newEntry)
    .then((res) => history.push("/CopperInput"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
