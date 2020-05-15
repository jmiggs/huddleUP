import { connect } from "react-redux";
// import { signup, login } from "../../actions/session_actions";
import { signup } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = state => ({
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user))
    // , 
    // login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);