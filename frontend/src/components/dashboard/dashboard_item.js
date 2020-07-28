import React from 'react';
// import DashBoard from './dashboard';
import { Link } from 'react-router-dom';

const DashBoardItem = ({ activity }) => {
    return (
        <div className="event-item">
            {
                activity.sport === 'basketball' ? 
                <Link to={`/activity/${activity._id}`}>
                    {/* <img className='event-img' alt="" src='event-img.jpg' /> */}
                        <img className='event-img' alt='basketball-card' src='basketball-card.png' />
                </Link> : (
                    activity.sport === 'golf' ? 
                    <Link to={`/activity/${activity._id}`}>
                        {/* <img className='event-img' alt="" src='event2-img.jpg' /> */}
                        <img className='event-img' alt='golf-card' src='golf-card.png' />
                    </Link> : (
                        activity.sport === 'football' ? 
                        <Link to={`/activity/${activity._id}`}>
                            {/* <img className='event-img' alt="" src='event3-img.jpg' /> */}
                                        <img className='event-img' alt='football-card' src='football-card.png' />
                        </Link> : (
                            activity.sport === 'soccer' ? 
                            <Link to={`/activity/${activity._id}`}>
                                <img className='event-img' alt='soccer-card' src='soccer-card.png' />
                            </Link> : (
                                <Link to={`/activity/${activity._id}`}>
                                    <img className='event-img' alt='tennis-card' src='tennis-card.png' />
                                </Link>
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