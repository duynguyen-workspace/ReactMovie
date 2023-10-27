import { combineReducers } from "redux";
import { btMovieReducer } from "./ReactMovie/slice";

export const rootReducer = combineReducers({
    btMovie: btMovieReducer
})