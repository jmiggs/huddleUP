import { connect } from "react-redux"; 
import ActivityForm from "./activity_form";
import { createActivity } from "../../actions/activities_actions";

const mapStateToProps = state => ({
    currentUser: state.session.user,
    activity: { 
        title: "", 
        location: "", 
        sport: "", 
        description: "", 
        numplayersneed: "", 
        day: "", 
        time: "", 
        host: state.session.user, 
        clicked: false, 
        lat: "", 
        lng: ""
    },
    formType: "Host"
})

const mapDispatchToProps = dispatch => ({
    action: activity => dispatch(createActivity(activity))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm);