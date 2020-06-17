import MyEvents from "./my_events";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchUserActivities } from '../../actions/activities_actions';

function activitiesHost(activities, id) {
  let res = [];
  if (activities) {
    let res2 = activities.filter(activity =>
      activity.host === id
    )
    res.push(...res2)
  }
  return res
}

function activitiesAttend(activities, id) {
  let res = [];
  if (activities) {
    let res2 = activities.filter(activity =>
      activity.participants.includes(id) && activity.host !== id
    )
    res.push(...res2)
  }
  return res
}

function activitiesCount(activities, id) {

  let count;
  if (activities) {
    count = activities.length
  }

  return count
}

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    id: state.session.user.id,
    activitiesHosting: activitiesHost(state.entities.users.currentUserActivities, state.session.user.id),
    activitiesAttending: activitiesAttend(state.entities.users.currentUserActivities, state.session.user.id), 
    activitiesCount: activitiesCount(state.entities.users.currentUserActivities)
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUserActivities: (userId) => dispatch(fetchUserActivities(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyEvents);