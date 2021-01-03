import React from "react"; 

// import ActivityMap from '../activity_map/activity_map'
import NavBarContainer from "../navbar/navbar_container";
import ShowMap from './map_show';
import "../../reset.css";
import "./activity_show.css";
import Footer from "../footer/footer";

class Activity extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = { 
      subscribed: props.subscribed, 
      existingSubscriptionId: props.existingSubscriptionId 
    }

    this.renderSubscribeButton = this.renderSubscribeButton.bind(this);
    this.subscribeToActivity = this.subscribeToActivity.bind(this);
    this.unsubscribeToActivity = this.unsubscribeToActivity.bind(this);
    this.deleteActivity = this.deleteActivity.bind(this);
  }
  
  componentDidMount() { 
    window.scrollTo({ top: 0 });
    this.props.fetchActivity(this.props.match.params.id)
  }
  
  componentDidUpdate(prevProps) { // Need this for the constructor to be run again. It only gets ran one if you don't have this in here.
    if (this.props.subscribed !== prevProps.subscribed) { 
      this.setState({ subscribed: this.props.subscribed, existingSubscriptionId: this.props.existingSubscriptionId })
    }
    
    if (prevProps.activity) {
      if (this.props.activity) {
        if (this.props.activity._id !== prevProps.activity._id) { 
          // this.initMap() // From Google Maps API docs
          this.props.fetchActivity(this.props.match.params.id)
        } 
      } else {
          this.props.fetchActivity(this.props.match.params.id)
      }
    } 
  }

  unsubscribeToActivity(e) { 
    e.preventDefault();

    this.props.unsubscribeToActivity(this.props.activity._id) // I just needed to add { new: true } to the backend
     
  }

  subscribeToActivity(e) { 
    e.preventDefault();

    this.props.subscribeToActivity(this.props.activity._id)
  }

  renderSubscribeButton() { 
    if (this.state) { 
      if ((this.props.activity.numplayersneed - this.props.numOfPlayers) === 0 && !this.state.existingSubscriptionId) { 
        return <p className="max-players">No Players Needed</p>
      } else if (this.state.subscribed) {
        return <button className="unsubscribe-button" onClick={this.unsubscribeToActivity}>Unsubscribe</button>
      } else {
        return <button className="subscribe-button" onClick={this.subscribeToActivity}>Subscribe</button>
      }
    }
  }

  deleteActivity(e) { 
    e.preventDefault();
    this.props.deleteActivity(this.props.activity._id)
      .then(window.location.href = "/");
  };

  render() { 
    if (!this.props.activity) return null;
    
    return (
      <div>
        <NavBarContainer />
        
        <div className="activity-show-page"> 
          <div className="activity-show-container"> 
            <p className="show-page-title">{this.props.activity.title}</p>
            <p className="show-page-description">{this.props.activity.description}</p>

            <div className="show-page-details">
              <p className="show-page-numamountplayers">Players Attending: {this.props.numOfPlayers}</p>
              <p className="show-page-numplayersneed">Remaining Players Needed: {this.props.activity.numplayersneed - this.props.numOfPlayers}</p>
              <p className="show-page-location">Date: {this.props.activity.day}</p>
              <p className="show-page-location">Start Time: {this.props.activity.time}</p>
              <p className="show-page-location">Location: {this.props.activity.location}</p>
              <p className="show-page-sport">Sport: {this.props.activity.sport.charAt(0).toUpperCase() + this.props.activity.sport.slice(1)}</p>
            </div>

            {this.renderSubscribeButton()}
            {
            this.props.currentUser.id === this.props.activity.host ? 
            <div className="show-buttons"> 
              <button onClick={() => window.location.href = `/#${this.props.match.url}/edit`} className="owned-activity-button edit">Edit</button> 
              <button onClick={e => this.deleteActivity(e)} className="owned-activity-button delete">Delete</button>
            </div> : 
            null
            }

            <ShowMap activity={this.props.activity} />
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Activity

  
