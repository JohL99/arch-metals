import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import inputReducer from "./inputReducer";
/* import profileReducer from "./profileReducer";
import postReducer from "./postReducer"; */

export default combineReducers({
  auth: authReducer,
  input: inputReducer,
  errors: errorReducer,
});
