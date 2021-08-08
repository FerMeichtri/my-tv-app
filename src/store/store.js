import { createStore, combineReducers, applyMiddleware } from "redux";
import { addShowsReducer } from "../reducers/searchReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  shows: addShowsReducer,
});

export const store = createStore(
  reducers,
  applyMiddleware(thunk),
);