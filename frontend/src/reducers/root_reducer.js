import { combineReducers } from "redux";
import session from "./session_reducer";
import ErrorsReducer from "./errors_reducer";
import EntitiesReducer from "../reducers/entities_reducer";

const rootReducer = combineReducers({
    session,
    errors: ErrorsReducer,
    entities: EntitiesReducer
});

export default rootReducer;