import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MapMarker from './mapmarker'

import "../../reset.css";
import "./map.css"

const google = window.google

class Map extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.798887, lng: -122.401373 }, 
      zoom: 11
    };
    // puts map on the page
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);

    // create class MapMarker that helps place markers on the map

    this.mapMarker = new MapMarker(this.map);
    this.mapMarker.updateMarkers(this.props.activities);

    // activate event handlers exclusive to the map
    this.registerListeners();
  }

  componentDidUpdate() {
   
    this.mapMarker.updateMarkers(this.props.activities);
  }

  registerListeners() {

    // when the map on the page is idle, the callback fx is invoked.
    // the call back grabs the maps current idle bounds, and formats it in a way that the updateFilter function
    // can use to send to the backend. the updateFilter 
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } 
      };
     
      // this function updates the ui slice of state with bounds as filters
      // and then uses those filters to grab the locations that are within the bounds
      this.props.updateFilter('bounds', bounds);
      this.props.updateFilter('sport', this.props.type);
    });

  }


  render() {
    return(
      <div className="map-container">
   
        <div className="map-this" ref="map">
          Map
        </div>
      </div>
    )
  }
};

export default Map