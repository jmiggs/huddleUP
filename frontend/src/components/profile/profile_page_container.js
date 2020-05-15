import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchUser } from "../../actions/users_actions";
import ProfilePage from "./profile_page";

const mapStateToProps = (state) => {
    return {
        loggedIn: state.session.isAuthenticated,
        user: {
            id: state.session.user.id,
            currentUsername: state.session.user.username,
            currentUserLocation: state.session.user.location,
            currentUserBio: state.session.user.bio,
            currentUserSports: state.session.user.sports,
            currentUserPicture: state.session.user.picture
        }
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);