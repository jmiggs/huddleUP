import React, { useState, useEffect } from "react";
import NavBarContainer from "../navbar/navbar_container";
import ShowMap from './map_show';
import "../../reset.css";
import "./activity_show.css";
import Footer from "../footer/footer";

const Activity = props => {
  const [subscribed, setSubscribed] = useState(props.subscribed);
  const [existingSubscriptionId, setExistingSubscriptionId] = useState(props.existingSubscriptionId);

  useEffect(() => { 
    window.scrollTo({ top: 0 });
    props.fetchActivity(props.match.params.id);
  }, []);

  useEffect(() => {
    setSubscribed(props.subscribed);
    setExistingSubscriptionId(props.existingSubscriptionId);
  }, [props.subscribed]);

  const unsubscribeToActivity = e => {
    e.preventDefault();
    props.unsubscribeToActivity(props.activity._id); // I just needed to add { new: true } to the backend
  };

  const subscribeToActivity = e => {
    e.preventDefault();
    props.subscribeToActivity(props.activity._id);
  };

  const renderSubscribeButton = () => {
    // if (this.state) {
      if ((props.activity.numplayersneed - props.numOfPlayers) === 0 && !existingSubscriptionId) {
        return <p className="max-players">No Players Needed</p>
      } else if (subscribed) {
        return <button className="unsubscribe-button" onClick={unsubscribeToActivity}>Unsubscribe</button>
      } else {
        return <button className="subscribe-button" onClick={subscribeToActivity}>Subscribe</button>
      }
    };
  // }

  const deleteActivity = e => {
    e.preventDefault();
    props.deleteActivity(props.activity._id)
      .then(window.location.href = "/");
  };

  if (!props.activity) return null;

  return (
    <div>
      <NavBarContainer />
      <div className="activity-show-page">
        <div className="activity-show-container">
          <p className="show-page-title">{props.activity.title}</p>
          <p className="show-page-description">{props.activity.description}</p>
          <div className="show-page-details">
            <p className="show-page-numamountplayers">Players Attending: {props.numOfPlayers}</p>
            <p className="show-page-numplayersneed">Remaining Players Needed: {props.activity.numplayersneed - props.numOfPlayers}</p>
            <p className="show-page-location">Date: {props.activity.day}</p>
            <p className="show-page-location">Start Time: {props.activity.time}</p>
            <p className="show-page-location">Location: {props.activity.location}</p>
            <p className="show-page-sport">Sport: {props.activity.sport.charAt(0).toUpperCase() + props.activity.sport.slice(1)}</p>
          </div>
          {renderSubscribeButton()}
          {
            props.currentUser.id === props.activity.host ?
              <div className="show-buttons">
                <button onClick={() => window.location.href = `/#${props.match.url}/edit`} className="owned-activity-button edit">Edit</button>
                <button onClick={e => deleteActivity(e)} className="owned-activity-button delete">Delete</button>
              </div> :
              null
          }
          <ShowMap activity={props.activity} />
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Activity;