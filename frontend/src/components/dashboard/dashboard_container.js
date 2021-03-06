import { connect } from 'react-redux';
import DashBoard from './dashboard';
import { fetchActivities } from '../../actions/activities_actions'

const mapStateToProps = state => {
    let activities = Object.values(state.entities.activities).filter(activity => new Date(activity.day) - new Date() > 0);
    let basketball = [];
    let golf = [];
    let football = [];
    let tennis = [];
    let soccer = [];
    
    if (activities) {
        activities.forEach(activity => {
            if (activity.sport === 'basketball') {
                basketball.push(activity)
            } else if (activity.sport === 'golf') {
                golf.push(activity)
            } else if (activity.sport === 'football') {
                football.push(activity)
            } else if (activity.sport === 'tennis') {
                tennis.push(activity)
            } else {
                soccer.push(activity)
            }
        })
    }

    return ({
        basketball,
        golf,
        football,
        tennis,
        soccer
    })
    
};

const mapDispatchToProps = dispatch => ({
    fetchActivities: () => dispatch(fetchActivities())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)