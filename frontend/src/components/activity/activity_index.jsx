import React from "react"; 
import { Link } from "react-router-dom";
import ActivityMap from '../activity_map/activity_map'
import './activity.css';
import ActivityIndexItem from './activity_index_item';

// Receives props from search container
const ActivityIndex = ({ basketball, tennis, soccer, golf, football }) => {
   return (
      <div>
         {
            basketball.map(activity => <ActivityIndexItem activity={activity} />)
         }
      </div>
   )
}

export default ActivityIndex;

  
