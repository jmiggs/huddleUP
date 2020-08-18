import * as ActivitiesAPIUtil from "../util/activities_api_util"; 

export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";
export const RECEIVE_ACTIVITY = "RECEIVE_ACTIVITY";
export const RECEIVE_USER_ACTIVITIES = "RECEIVE_USER_ACTIVITIES";
export const REMOVE_ACTIVITY = "REMOVE_ACTIVITY";

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
});

const removeActivity = activityid => ({ 
  type: REMOVE_ACTIVITY,
  activityid
});

export const fetchActivities = () => dispatch => {
    return ActivitiesAPIUtil.getActivities()
        .then(res => dispatch(receiveActivities(res.data)))
        .catch(err => console.log("BAD"))
};

export const fetchActivitiesFiltered = (filters) => (dispatch, getState) => {
  // effectively does the same thing as the fx above, but added filters
  // will test to see if we need this, or if we can just use above fx....

  return ActivitiesAPIUtil.getActivitiesFiltered(getState().ui.filters)
      .then(res => {
        dispatch(receiveActivities(res.data))
      })
      .catch(err => console.log("BAD"))
};

export const fetchActivity = activityId => dispatch => {
    return ActivitiesAPIUtil.getActivity(activityId)
        .then(res => {
          // console.log(res)
          dispatch(receiveActivity(res.data))
        })
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

export const updateActivity = activity => dispatch => { 
    return ActivitiesAPIUtil.updateActivity(activity)
        .then(res => dispatch(receiveActivity(res.data)))
        .catch(err => console.log("BAD"))
}

export const deleteActivity = id => dispatch => { 
  return ActivitiesAPIUtil.deleteActivity(id)
    .then(res => dispatch(removeActivity(id)))
    .catch(err => console.log(err))
}

export const subscribeToActivity = activityId => dispatch => {

    return ActivitiesAPIUtil.subscribeToActivity(activityId)
        .then(res => dispatch(receiveActivity(res.data))) // I don't even need an action for this since I'm doing it when the user leaves the page
        // .then(res => console.log(res))
        .catch(err => console.log("Can't subscribe to this activity"))
}

export const unsubscribeToActivity = activityId => dispatch => {

  return ActivitiesAPIUtil.unsubscribeToActivity(activityId)
      .then(res => dispatch(receiveActivity(res.data)))
    //   .then(res => console.log(res))
      .catch(err => console.log("Can't unsubscribe to this activity"))
}