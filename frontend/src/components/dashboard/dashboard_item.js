import React from 'react';
import DashBoard from './dashboard';
import { Link } from 'react-router-dom';

const DashBoardItem = ({ activity }) => {
    return (
        <div className="event-item">
            <img className='event-img' src='event-img.jpg' />
            <br/>
            <span className='event-date'>{activity.date}</span>
            <span className='event-title'>{activity.title}</span>
            <Link to={`/activity/${activity._id}`}></Link> 
        </div>
    )
}

export default DashBoardItem;