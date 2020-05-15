import React from 'react';
// import DashBoard from './dashboard';
import { Link } from 'react-router-dom';

const DashBoardItem = ({ activity }) => {
    return (
        <div className="event-item">
            {
                activity.sport === 'basketball' ? <img className='event-img' alt="" src='event-img.jpg' /> : (
                    activity.sport === 'golf' ? <img className='event-img' alt="" src='event2-img.jpg' /> : (
                        activity.sport === 'football' ? <img className='event-img' alt="" src='event3-img.jpg' /> : (
                            activity.sport === 'soccer' ? <img className='event-img' alt="" src='event4-img.jpg' /> : (
                                <img className='event-img' alt="" src='event5-img.jpg' />
                            )
                        )
                    )
                )
            }
            {/* <img className='event-img' alt="" src='event-img.jpg' /> */}
            <br/>
            <span className='event-date'>{activity.day}, {activity.date.slice(0,10)} </span>
            <span className='event-title'>{activity.title}</span>
            <Link to={`/activity/${activity._id}`}>Click here</Link> 
        </div>
    )
}

export default DashBoardItem;