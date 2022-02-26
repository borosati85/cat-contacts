import { combineReducers } from "redux";
import cardReducer from "./card/card.reducer";
import inputReducer from "./input/input.reducer";

const rootReducer = combineReducers({
    card: cardReducer,
    input: inputReducer
});

export default rootReducer;