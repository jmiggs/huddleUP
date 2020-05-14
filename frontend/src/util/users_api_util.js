import axios from "axios"; 

export const fetchUser = (id) => {
    return axios.get(`/api/users/${id}`)
};

export const updateUser = (data) => {
    return axios.patch(`/api/users/${data._id}`, data)
};