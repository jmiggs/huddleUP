import React from 'react';
// import DashBoard from './dashboard';
import { Link } from 'react-router-dom';

const DashBoardItem = ({ activity }) => {
    return (
        <div className="event-item">
            {
                activity.sport === 'basketball' ? <Link to={`/activity/${activity._id}`}><img className='event-img' alt="" src='event-img.jpg' /></Link> : (
                    activity.sport === 'golf' ? <Link to={`/activity/${activity._id}`}><img className='event-img' alt="" src='event2-img.jpg' /></Link> : (
                        activity.sport === 'football' ? <Link to={`/activity/${activity._id}`}><img className='event-img' alt="" src='event3-img.jpg' /></Link> : (
                            activity.sport === 'soccer' ? <Link to={`/activity/${activity._id}`}><img className='event-img' alt="" src='event4-img.jpg' /></Link> : (
                                <Link to={`/activity/${activity._id}`}><img className='event-img' alt="" src='event5-img.jpg' /></Link>
                            )
                        )
                    )
                )
            }
            <br/>
            <span className='event-date'>{activity.day}</span>
            <span className='event-title'>{activity.title}</span>
        </div>
    )
}

export default DashBoardItem;