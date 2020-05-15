import * as UsersAPIUtil from "../util/users_api_util";

// import jwt_decode from "jwt-decode";

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_USER_ERRORS = 'CLEAR_USER_ERRORS';

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const receiveUserErrors = (errors) => ({
    type: RECEIVE_USER_ERRORS,
    errors
});

export const clearUserErrors = () => ({
    type: CLEAR_USER_ERRORS
})

export const fetchUser = (id) => dispatch => {
    UsersAPIUtil.fetchUser(id)
        .then((user) => (dispatch(receiveUser(user))),
        err => dispatch(receiveUserErrors(err.response.data)))
};
 
export const updateUser = (user) => dispatch => {
    UsersAPIUtil.updateUser(user)     
        .then((user) => (dispatch(receiveUser(user))),
        err => dispatch(receiveUserErrors(err.response.data)))
}

