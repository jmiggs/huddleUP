import { connect } from "react-redux";
// import { updateUser } from "../../actions/session_actions";
import EditProfilePage from "./edit_profile_page";

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
    // updateUser: (user) => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage);