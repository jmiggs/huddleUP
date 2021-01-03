// import React from "react"; 

// // import ActivityMap from '../activity_map/activity_map'
// import NavBarContainer from "../navbar/navbar_container";
// import ShowMap from './map_show';
// import "../../reset.css";
// import "./activity_show.css";
// import Footer from "../footer/footer";

// class Activity extends React.Component { 
//   constructor(props) { 
//     super(props)
//     this.state = { 
//       subscribed: props.subscribed, 
//       existingSubscriptionId: props.existingSubscriptionId 
//     }

//     this.renderSubscribeButton = this.renderSubscribeButton.bind(this);
//     this.subscribeToActivity = this.subscribeToActivity.bind(this);
//     this.unsubscribeToActivity = this.unsubscribeToActivity.bind(this);
//     this.deleteActivity = this.deleteActivity.bind(this);
//   }
  
//   componentDidMount() { 
//     window.scrollTo({ top: 0 });
//     this.props.fetchActivity(this.props.match.params.id)
//   }
  
//   componentDidUpdate(prevProps) { // Need this for the constructor to be run again. It only gets ran one if you don't have this in here.
//     if (this.props.subscribed !== prevProps.subscribed) { 
//       this.setState({ subscribed: this.props.subscribed, existingSubscriptionId: this.props.existingSubscriptionId })
//     }
    
//     if (prevProps.activity) {
//       if (this.props.activity) {
//         if (this.props.activity._id !== prevProps.activity._id) { 
//           // this.initMap() // From Google Maps API docs
//           this.props.fetchActivity(this.props.match.params.id)
//         } 
//       } else {
//           this.props.fetchActivity(this.props.match.params.id)
//       }
//     } 
//   }

//   unsubscribeToActivity(e) { 
//     e.preventDefault();

//     this.props.unsubscribeToActivity(this.props.activity._id) // I just needed to add { new: true } to the backend
     
//   }

//   subscribeToActivity(e) { 
//     e.preventDefault();

//     this.props.subscribeToActivity(this.props.activity._id)
//   }

//   renderSubscribeButton() { 
//     if (this.state) { 
//       if ((this.props.activity.numplayersneed - this.props.numOfPlayers) === 0 && !this.state.existingSubscriptionId) { 
//         return <p className="max-players">No Players Needed</p>
//       } else if (this.state.subscribed) {
//         return <button className="unsubscribe-button" onClick={this.unsubscribeToActivity}>Unsubscribe</button>
//       } else {
//         return <button className="subscribe-button" onClick={this.subscribeToActivity}>Subscribe</button>
//       }
//     }
//   }

//   deleteActivity(e) { 
//     e.preventDefault();
//     this.props.deleteActivity(this.props.activity._id)
//       .then(window.location.href = "/");
//   };

//   render() { 
//     if (!this.props.activity) return null;
    
//     return (
//       <div>
//         <NavBarContainer />
        
//         <div className="activity-show-page"> 
//           <div className="activity-show-container"> 
//             <p className="show-page-title">{this.props.activity.title}</p>
//             <p className="show-page-description">{this.props.activity.description}</p>

//             <div className="show-page-details">
//               <p className="show-page-numamountplayers">Players Attending: {this.props.numOfPlayers}</p>
//               <p className="show-page-numplayersneed">Remaining Players Needed: {this.props.activity.numplayersneed - this.props.numOfPlayers}</p>
//               <p className="show-page-location">Date: {this.props.activity.day}</p>
//               <p className="show-page-location">Start Time: {this.props.activity.time}</p>
//               <p className="show-page-location">Location: {this.props.activity.location}</p>
//               <p className="show-page-sport">Sport: {this.props.activity.sport.charAt(0).toUpperCase() + this.props.activity.sport.slice(1)}</p>
//             </div>

//             {this.renderSubscribeButton()}
//             {
//             this.props.currentUser.id === this.props.activity.host ? 
//             <div className="show-buttons"> 
//               <button onClick={() => window.location.href = `/#${this.props.match.url}/edit`} className="owned-activity-button edit">Edit</button> 
//               <button onClick={e => this.deleteActivity(e)} className="owned-activity-button delete">Delete</button>
//             </div> : 
//             null
//             }

//             <ShowMap activity={this.props.activity} />
//           </div>
//         </div>

//         <Footer />
//       </div>
//     )
//   }
// }

// export default Activity

  






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
  }, []);

  useEffect(() => {
    props.fetchActivity(props.match.params.id);
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