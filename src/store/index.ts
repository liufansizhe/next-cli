import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";

import { thunk } from "redux-thunk";
import userInfo from "./action";

const store = createStore(
  combineReducers({
    userInfo,
  }),
  applyMiddleware(thunk)
);

export default store;
