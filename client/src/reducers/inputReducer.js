import { ADD_PRICE, GET_ERRORS, SET_CURRENT_USER } from "../actions/types";

const initialState = {
  price: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRICE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
}
