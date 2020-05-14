import { combineReducers } from "redux";
import ActivitiesReducer from "./activities_reducer"; 
import UsersReducer from "./users_reducer";

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    activities: ActivitiesReducer
});

export default EntitiesReducer;