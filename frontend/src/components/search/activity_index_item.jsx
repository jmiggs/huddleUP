import React from 'react';
import { Link } from 'react-router-dom';
import ActivityIndex from './activity_index';

const ActivityIndexItem = ({ activity }) => {
    return (
        <div className='activity-wrapper'>
            <div className='activity-index-item'>
                <span className='activity-date'>{activity.day}, {activity.date.slice(0,10)} {activity.time}</span>
                <span className='activity-title'>{activity.title}</span>
                <span className='activity-desc'>{activity.description}</span>
                <Link className='see-more' to={`/activity/${activity._id}`}>See More Details</Link>
            </div>
        </div>
            
    )
}

export default ActivityIndexItem;