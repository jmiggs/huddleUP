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
      zoom: 17
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.mapMarker = new MapMarker(this.map);
    this.mapMarker.updateMarkers();
  }

  componentDidUpdate() {
    this.mapMarker.updateMarkers();
  }


  render() {
    console.log(google)
    return(
      <div className="map-container">
        hello
        <div className="map-this" ref="map">
          Map
        </div>
      </div>
    )
  }

};

export default Map