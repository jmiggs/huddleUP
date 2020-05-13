import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import ProfilePage from "./profile_page";

const mapStateToProps = state => {
    return {
        loggedIn: state.session.isAuthenticated,
        currentUsername: state.session.user.username,
        currentUserLocation: state.session.user.location,
        currentUserBio: state.session.user.bio,
        currentUserSports: state.session.user.sports
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);