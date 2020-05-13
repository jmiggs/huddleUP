import { combineReducers } from "redux";
import ActivitiesReducer from "./activities_reducer"; 

const EntitiesReducer = combineReducers({
    activities: ActivitiesReducer
});

export default EntitiesReducer;