import { combineReducers } from "redux"; 
import SessionErrorsReducer from "./session_errors_reducer";
import UserErrorsReducer from "./users_errors_reducer";

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    user: UserErrorsReducer
});

export default ErrorsReducer;