import { configureStore } from "redux-starter-kit";
import { combineReducers } from "redux";

import reposSlice from "./repos.slice";

const rootReducer = combineReducers({
  repos: reposSlice.reducer
});

export default () =>
  configureStore({
    reducer: rootReducer
  });
