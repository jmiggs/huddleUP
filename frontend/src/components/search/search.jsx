import React from 'react';

import Map from '../map/map';
import Filters from './filters.jsx';
import ActivityIndex from './activity_index.jsx';
import { render } from 'react-dom';


// filters and activity index to be added later
class Search extends React.Component {
  render() {
    return(
      <div>
        <div>
          <Map updateFilter={this.props.updateFilter} activities={this.props.activities} type={this.props.type} />
        </div>

        <div>
          <Filters updateFilter={this.props.updateFilter} />
        </div>

        <div>
          {/* <ActivityIndex activities={activities} /> */}
        </div>
      </div>
    )
  }

};

export default Search;