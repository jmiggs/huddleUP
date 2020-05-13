import React from 'react';
import DashBoard from './dashboard';

const DashBoardItem = ({ activity }) => {
    return (
        <div className="event-item">
            <img className='event-img' src='event-img.jpg' />
            <br/>
            <span className='event-date'>Event Date</span>
            <span className='event-title'>Title</span>
        </div>
    )
}

export default DashBoardItem;