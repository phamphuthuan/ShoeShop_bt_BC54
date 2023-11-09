import { combineReducers } from "redux";
import { shoesReducer } from "./shoes";

export let rootReducer = combineReducers({
  shoesReducer: shoesReducer,
});
