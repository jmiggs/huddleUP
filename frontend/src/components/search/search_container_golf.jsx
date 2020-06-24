import { connect } from 'react-redux';
import { updateFilter} from '../../actions/filter_actions'
import { fetchActivities } from '../../actions/activities_actions'
import { fetchActivitiesFiltered } from '../../actions/activities_actions'

import Search from './search';

// takes activities hash object and maps it into an array so that the map can easily access the data
const asArray = ({ activities }) => {
  return(
  // Object.keys(activities).map(key => activities[key])
    Object.values(activities).filter(activity => new Date(activity.day) - new Date() > 0)
  )
};

const mapStateToProps = state => ({
  activities: asArray(state.entities),
  type: 'golf'
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchActivities: () => dispatch(fetchActivities()),
  fetchActivitiesFiltered: () => dispatch(fetchActivitiesFiltered())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);