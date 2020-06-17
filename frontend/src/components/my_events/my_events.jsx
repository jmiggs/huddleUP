import NavBarContainer from '../navbar/navbar_container';
import ActivityIndex from './../search/activity_index.jsx';
import MyMap from './my_map';
import React from 'react';
import './my.css';

class MyEvents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 'host'
    }
  }

  componentDidMount() {
    this.props.fetchUserActivities(this.props.id)
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.activitiesCount)
    console.log(this.props.activitiesCount)

    if (prevProps) {
      if (prevProps.activitiesCount !== this.props.activitiesCount) {
        this.props.fetchUserActivities(this.props.id)
      }
    }
  }

  // shouldComponentUpdate(nextProps) {

  //   return true
  // }

  handleTabChangeHosting() {
    if (this.state.tab !== 'host') {
      this.setState({
        tab: 'host'
      })
    }
  }

  handleTabChangeAttending() {
    if (this.state.tab !== 'attend') {
      this.setState({
        tab: 'attend'
      })
    }
  }
 
  render() {
    if (!this.props.activitiesHosting) return null
    return(
      <div>
        <NavBarContainer />
        <div className="my-wrapper">
          <div className="my-left">
            <div className="my-header">
              My Events
            </div>
            <MyMap activities={this.state.tab ==='host'?this.props.activitiesHosting:this.props.activitiesAttending}/>
          </div>
          <div className="my-right">
            <div className="my-buttons">
              <button 
                onClick={() => this.handleTabChangeHosting()} 
                className={this.state.tab === 'host'? 'my-buttontab-active':'my-buttontab'}>
                  Hosting
              </button>
              <button 
                onClick={() => this.handleTabChangeAttending()} 
                className={this.state.tab !== 'host'? 'my-buttontab-active':'my-buttontab'}>
                  Attending
              </button>
            </div>
            <div className="my-events-container">
              <ActivityIndex 
                activities={this.state.tab ==='host'?this.props.activitiesHosting:this.props.activitiesAttending}
              />
            </div>

          </div>
        </div>
      </div>
    )
  }

}

export default MyEvents;

