import React from "react";
import './activity.css';
import ActivityIndexItem from './activity_index_item';

// Receives props from search container
const ActivityIndex = ( {activities} ) => {
//   console.log(activities)
    return (
        <div className='activity-index'>
            {
                activities.map(activity => <ActivityIndexItem activity={activity} key={activity._id}/>)
            }
        </div>
    )
}

export default ActivityIndex;
