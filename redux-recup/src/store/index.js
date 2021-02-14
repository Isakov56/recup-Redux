import { createStore } from "redux";
import { mainReduser } from "./redusers";

export const initialState = {
  count: 0,
  micky: "mouse",
  strive: "School",
};

const configStore = () =>
  createStore(
    mainReduser,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default configStore;
