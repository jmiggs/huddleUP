import { connect } from "react-redux"; 
import ActivityForm from "./activity_form";
import { createActivity } from "../../actions/activities_actions";

const mapStateToProps = state => ({
    currentUser: state.session.user,
    activity: { title: "", location: "", sport: "", description: "", numplayersneed: "", host: state.session.user, clicked: false }
})

const mapDispatchToProps = dispatch => ({
    action: activity => dispatch(createActivity(activity))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm);