import NavBar from "./navbar";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchUser } from '../../actions/users_actions';
import { fetchUserActivities } from '../../actions/activities_actions';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    id: state.session.user.id,
    userActivities: state.entities.users.currentUserActivities
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    // fetchUser: (userId) => dispatch(fetchUser(userId))
    fetchUserActivities: (userId) => dispatch(fetchUserActivities(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);