import { RECEIVE_ACTIVITIES, RECEIVE_ACTIVITY, REMOVE_ACTIVITY } from "../actions/activities_actions";

const ActivitiesReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_ACTIVITIES:
            // return Object.assign({}, oldState, action.activities)
            return Object.assign({}, action.activities)
        case RECEIVE_ACTIVITY:
            // return Object.assign({}, oldState, { [action.activity._id]: action.activity })
            // debugger
            return { [action.activity._id]: action.activity }
        case REMOVE_ACTIVITY: 
            let newState = Object.assign({}, oldState);
            delete newState[action.activityid];
            return newState;
        default:
            return oldState
    }
}

export default ActivitiesReducer;