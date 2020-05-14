import React from "react"; 
import { Link } from "react-router-dom";
import ActivityMap from '../activity_map/activity_map'
import './activity.css';


// Receives props from search container
const ActivityIndex = props => {
   return (
      <div>
         {
            activities.map(activity => <ActivityIndexItem activity={activity} />)
         }
      </div>
   )
}

export default ActivityIndex;

  
