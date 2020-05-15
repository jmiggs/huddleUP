import React from "react"; 
import { Link } from "react-router-dom";



const EventsItem = (props) => {

  console.log(props)
  return(
    <div className="dropdown-item-nav">
      <div id="push"> 
        <div className="item-info">
          <div id="title-dd-nav">{props.title}</div>
          <div id="iteminfo">{props.day}</div>
          <div id="iteminfo">{props.time}</div>
        </div>
        <div className="item-link">
          <Link to={`/activity/${props.id}`} id="navlink-text-dd">Go to Huddle</Link>
        </div>
      </div>
    </div>
  )

}


export default EventsItem;