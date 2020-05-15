import * as ActivitiesAPIUtil from "../util/activities_api_util"; 

export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";
export const RECEIVE_ACTIVITY = "RECEIVE_ACTIVITY";
export const RECEIVE_USER_ACTIVITIES = "RECEIVE_USER_ACTIVITIES";

const receiveActivities = activities => ({
    type: RECEIVE_ACTIVITIES, 
    activities
});

const receiveActivity = activity => ({
    type: RECEIVE_ACTIVITY, 
    activity
});

const receiveUserActivities = activities => ({
  type: RECEIVE_USER_ACTIVITIES,
  activities,

})

export const fetchActivities = () => dispatch => {
    return ActivitiesAPIUtil.getActivities()
        .then(res => dispatch(receiveActivities(res.data)))
        .catch(err => console.log("BAD"))
};

export const fetchActivitiesFiltered = (filters) => dispatch => {
  // effectively does the same thing as the fx above, but added filters
  // will test to see if we need this, or if we can just use above fx....

  return ActivitiesAPIUtil.getActivitiesFiltered(filters)
      .then(res => {
        dispatch(receiveActivities(res.data))})
      .catch(err => console.log("BAD"))
};

export const fetchActivity = activityId => dispatch => {
    return ActivitiesAPIUtil.getActivity(activityId)
        .then(res => dispatch(receiveActivity(res.data)))
        .catch(err => console.log("BAD"))
};

export const fetchUserActivities = userId => dispatch => {
//   console.log(userId)
  return ActivitiesAPIUtil.getUserActivities(userId)
      .then(res => dispatch(receiveUserActivities(res.data)))
      .catch(err => console.log("BAD"))
};

export const createActivity = activity => dispatch => {
    return ActivitiesAPIUtil.createActivity(activity)
        .then(res => dispatch(receiveActivity(res.data)))
        .catch(err => console.log("BAD"))
};


export const subscribeToActivity = activityId => dispatch => {

    return ActivitiesAPIUtil.subscribeToActivity(activityId)
        .then(res => dispatch(receiveActivity(res.data)))
        .catch(err => console.log("Can't subscribe to this activity"))
}

export const unsubscribeToActivity = activityId => dispatch => {

  return ActivitiesAPIUtil.unsubscribeToActivity(activityId)
      .then(res => console.log(res))
      .catch(err => console.log("Can't unsubscribe to this activity"))
}