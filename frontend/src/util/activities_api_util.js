import axios from "axios"

export const getActivities = () => {
    return axios.get("/api/activities")
};

export const getActivitiesFiltered = (filters) => {
  return axios.get("/api/activities/", {params: {filters: filters}})
};

export const getUserActivities = (userId) => {

  return axios.get(`/api/activities/users/${userId}`)
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

export const updateActivity = data => { 
  // console.log(data)
  return axios.patch(`/api/activities/${data._id}`, data)
}

export const deleteActivity = id => { 
  return axios.delete(`/api/activities/${id}`);
}

export const subscribeToActivity = id => {
    return axios.post(`/api/activities/${id}`)
}

export const unsubscribeToActivity = id => {
  return axios.patch(`/api/activities/unsubscribe/${id}`)
}