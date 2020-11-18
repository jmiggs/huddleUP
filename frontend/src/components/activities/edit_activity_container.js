import React from "react"; 
import { connect } from "react-redux";
import ActivityForm from "./activity_form";
import { fetchActivity, updateActivity } from "../../actions/activities_actions";

class Edit extends React.Component { 
    componentDidMount() { 
        this.props.fetchActivity(this.props.match.params.id)
    }

    render() { 
        return (this.props.activity) ? <ActivityForm {...this.props} /> : null
    }
}

const mapStateToProps = (state, ownProps) => ({
    activity: state.entities.activities[ownProps.match.params.id],
    currentUser: state.session.user,
    formType: "Edit"
})

const mapDispatchToProps = dispatch => ({
    fetchActivity: id => dispatch(fetchActivity(id)),
    action: activity => dispatch(updateActivity(activity)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
