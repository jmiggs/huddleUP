import React from 'react';

import Map from '../map/map';
import Filters from './filters.jsx';
import ActivityIndex from './activity_index.jsx';


// filters and activity index to be added later

const Search = (props) => {
  
  return(
  <div>
    <div>
      <Map updateFilter={props.updateFilter} activities={props.activities}/>
    </div>

    <div>
      {/* <Filters /> */}
    </div>

    <div>
      {/* <ActivityIndex activities={activities} /> */}
    </div>
  </div>
  )

};

export default Search;