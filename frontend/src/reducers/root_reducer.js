import { combineReducers } from "redux";
import session from "./session_reducer";
import ErrorsReducer from "./errors_reducer";
import EntitiesReducer from "../reducers/entities_reducer";
import ui from './ui_reducer';

const rootReducer = combineReducers({
    session,
    errors: ErrorsReducer,
    entities: EntitiesReducer,
    ui
});

export default rootReducer;