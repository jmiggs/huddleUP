import React from "react"; 
import "../../reset.css";
import "./navbar.css"

import EventsItem from './events_dropdown_item'



class EventsDropdown extends React.Component {

  

  render() {
    // console.log(this.props.userActivities)
    if (!this.props.userActivities) return null
    return(
      <div className="dropdown-nav">
        <div className="dropdown-nav-text">My Events</div>
        <div className="dropdown-content-nav">
          {this.props.userActivities.map(activity =>
            <EventsItem title={activity.title} day={activity.day} time={activity.time} id={activity._id} key={activity._id} />
          )}

        </div>
      </div>
    )

  }
}

export default EventsDropdown;