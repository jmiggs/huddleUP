import axios from "axios"

export const getActivities = () => {
    return axios.get("/api/activities/")
};

export const test = () => {
    return axios.get("/api/activities/test")
}

export const getActivity = id => {
    return axios.get(`/api/activities/${id}`)
};

export const createActivity = data => { 
    return axios.post("/api/activities/", data)
};


// Didn't test this yet
export const subscribeToActivity = id => {
    return axios.post(`/api/activities/${id}`)
}