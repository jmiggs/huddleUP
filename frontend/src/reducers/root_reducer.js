import { combineReducers } from "redux";
import session from "./session_reducer";
import ErrorsReducer from "./errors_reducer";

const rootReducer = combineReducers({
    session,
    errors: ErrorsReducer
});

export default rootReducer;