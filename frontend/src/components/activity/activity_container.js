import Activity from "./activity_show";
import { connect } from "react-redux";
import { subscribeToActivity, fetchActivity } from "../../actions/activities_actions";

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
            if (currentUser.id === activity.participants[i]) { 
                subscribed = true 
                existingSubscriptionId = activity.participants[i]
                break 
            } else { 
                subscribed = false
            }
        }
    }

    return { activity, subscribed, existingSubscriptionId, numOfPlayers }
};

const mapDispatchToProps = dispatch => ({
    subscribeToActivity: activityId => dispatch(subscribeToActivity(activityId)), 
    fetchActivity: activityId => dispatch(fetchActivity(activityId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Activity);