import React from 'react';
import { Link } from 'react-router-dom';

const ActivityIndexItem = ({ activity }) => {
    return (
        <div className='activity-wrapper'>
            <div className='activity-index-item'>
                <span className='activity-date'>{activity.day}, {activity.time}</span>
                <span className='activity-title'>{activity.title}</span>
                <span className='activity-desc'>{activity.description}</span>
                <div className='see-more-button'>
                    <Link className='see-more-text' to={`/activity/${activity._id}`}>See More Details</Link>
                </div>
            </div>
        </div>
            
    )
}

export default ActivityIndexItem;