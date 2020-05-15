import { RECEIVE_USER } from '../actions/users_actions';
import { RECEIVE_USER_ACTIVITIES } from '../actions/activities_actions'

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.data.id]: action.user.data });
        case RECEIVE_USER_ACTIVITIES:
            return Object.assign( {}, state, { currentUserActivities: action.activities} )
        default:
            return state;
    }
};

export default usersReducer;