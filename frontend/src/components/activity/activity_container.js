import Activity from "./activity_show";
import { connect } from "react-redux";
import { subscribeToActivity, fetchActivity, unsubscribeToActivity, fetchUserActivities } from "../../actions/activities_actions";
import { deleteActivity } from "../../actions/activities_actions";

const mapStateToProps = (state, ownProps) => {

    let currentUser = state.session.user
    let activity;

    let activities = Object.values(state.entities.activities)
    let existingSubscriptionId;
    if (activities) {
        for (let i = 0; i < activities.length; i++) {
            if (activities[i]._id === ownProps.match.params.id) {
                activity = activities[i]
            }
        };
    }

    let numOfPlayers;
    let subscribed;
    if (activity) {
      numOfPlayers = activity.participants.length
      for (let i = 0; i < activity.participants.length; i++) { 
        if (currentUser.id === activity.participants[i]) { // Maybe I can just do something with .includes instead of this for loop
          subscribed = true 
          existingSubscriptionId = activity.participants[i]
          break 
        } 
        else { subscribed = false}
      }
  
    }
    // debugger
    return { activity, subscribed, existingSubscriptionId, numOfPlayers, currentUser }
};

const mapDispatchToProps = dispatch => ({
    subscribeToActivity: activityId => dispatch(subscribeToActivity(activityId)), 
    fetchActivity: activityId => dispatch(fetchActivity(activityId)),
    unsubscribeToActivity: activityId => dispatch(unsubscribeToActivity(activityId)), 
    fetchUserActivities: userId => dispatch(fetchUserActivities(userId)),
    deleteActivity: activityId => dispatch(deleteActivity(activityId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Activity);