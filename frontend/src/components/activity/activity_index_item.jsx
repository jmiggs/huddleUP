import React from 'react';
import { Link } from 'react-router-dom';
import ActivityIndex from './activity_index';

const ActivityIndexItem = ({ activity }) => {
    return (
        <div className='activity-index-item'>
            <span className='activity-title'>{activity.title}</span>
        </div>
    )
}

export default ActivityIndexItem;