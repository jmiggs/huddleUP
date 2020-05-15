import React from "react"; 
import { Link } from "react-router-dom";
// import ActivityMap from '../activity_map/activity_map'
import NavBarContainer from "../navbar/navbar_container";
import "../../reset.css";
import "./activity_show.css";
import Footer from "../footer/footer";

class Activity extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = { subscribed: props.subscribed, existingSubscriptionId: props.existingSubscriptionId }

    this.renderSubscribe = this.renderSubscribe.bind(this);
    this.componentCleanup = this.componentCleanup.bind(this);
    this.changeSubscription = this.changeSubscription.bind(this);
  }

  componentCleanup() { // this will hold the cleanup code
    // whatever you want to do when the component is unmounted or page refreshes
    if (this.state.subscribed && !this.state.existingSubscriptionId) { 
      this.props.subscribeToActivity(this.props.activity._id)
    } else if (!this.state.subscribed && this.state.existingSubscriptionId) { 
      console.log("Delete subscription!")
    }
  }

  componentDidMount() { 
    this.props.fetchActivity(this.props.match.params.id)
    window.addEventListener('beforeunload', this.componentCleanup);
  }

  componentWillUnmount() {
    this.componentCleanup();
    window.removeEventListener('beforeunload', this.componentCleanup); // remove the event handler for normal unmounting
  }

  componentDidUpdate(prevProps) { // Need this for the constructor to be run again. It only gets ran one if you don't have this in here.
    if (this.props.subscribed !== prevProps.subscribed) { 
      this.setState({ subscribed: this.props.subscribed })
    }
  }

  changeSubscription() { 
    this.setState({ subscribed: !this.state.subscribed })
  }

  renderSubscribe() { 
    if (this.state) { 
      if (this.state.subscribed) {
        return <button className="unsubscribe-button" onClick={this.changeSubscription}>Unsubscribe</button>
      } else {
        return <button className="subscribe-button" onClick={this.changeSubscription}>Subscribe</button>
      }
    }
  }

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
              <p className="show-page-numplayersneed">Remaining Players Needed: {this.props.activity.numplayersneed}</p>

              {/* Change the class names  */}
              <p className="show-page-location">Date: {this.props.activity.day}</p>
              <p className="show-page-location">Start Time: {this.props.activity.time}</p>

              <p className="show-page-location">Location: {this.props.activity.location}</p>
              <p className="show-page-sport">Sport: {this.props.activity.sport.charAt(0).toUpperCase() + this.props.activity.sport.slice(1)}</p>
            </div>

            {this.renderSubscribe()}

            <div className="activity-show-map">
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Activity

  
