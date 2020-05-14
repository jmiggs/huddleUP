import React from "react"; 
import { Link } from "react-router-dom";
import './activity.css';
import ActivityIndexItem from './activity_index_item';

// Receives props from search container
const ActivityIndex = ({ basketball, tennis, soccer, golf, football }) => {
   return (
      <div className='activity-index'>
         {/* <h1 className='activity-header'>Check out all the latest {basketball.sport} events!</h1> */}
         {
            basketball.map(activity => <ActivityIndexItem activity={activity} />)
         }
      </div>
   )
}

export default ActivityIndex;

  
