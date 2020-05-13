import React from 'react';
import DashBoard from './dashboard';

const DashBoardItem = ({ activity }) => {
    return (
        <div className="event-item">
            <img className='event-img' src='event-img.jpg' />
            <br/>
            <span className='event-date'>Wed, May 13 2020 2:30PM</span>
            <span className='event-title'>Who's tryna get dunked on?</span>
        </div>
    )
}

export default DashBoardItem;