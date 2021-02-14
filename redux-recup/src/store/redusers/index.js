import { initialState } from "../";

export const mainReduser = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "CHANGE_NAME":
      return {
        ...state,
        micky: action.payload,
      };
    default:
      return state;
  }
};
