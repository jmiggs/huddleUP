import {
    RECEIVE_USER,
    RECEIVE_USER_ERRORS,
    CLEAR_USER_ERRORS
} from '../actions/users_actions';

const _nullErrors = [];

const userErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return action.errors;
        case RECEIVE_USER:
            return _nullErrors;
        case CLEAR_USER_ERRORS:
            return _nullErrors;
        default:
            return state;
    }
};

export default userErrorsReducer;