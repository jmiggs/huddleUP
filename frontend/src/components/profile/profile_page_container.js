import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import ProfilePage from "./profile_page";

const mapStateToProps = state => {
    let currentUsername
    if (state.session.isAuthenticated) {
        currentUsername = state.session.user.username
    } else {
        currentUsername = ""
    }
    return {
        loggedIn: state.session.isAuthenticated,
        currentUsername: currentUsername
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    // getUser: () => dispatch(getUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);