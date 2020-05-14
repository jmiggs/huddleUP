import { connect } from "react-redux";
import { updateUser, fetchUser, clearUserErrors } from "../../actions/users_actions";
import EditProfilePage from "./edit_profile_page";

const mapStateToProps = (state) => {
    return {
        loggedIn: state.session.isAuthenticated,
        currentUser: state.session.user,
        errors: state.errors.user
    }
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateUser: (user) => dispatch(updateUser(user)),
    clearUserErrors: () => dispatch(clearUserErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage);