import React from "react"; 


const google = window.google;



class ShowMap extends React.Component {
  componentDidMount() {
    // The location of Uluru
    let uluru = { lat: this.props.activity.lat, lng: this.props.activity.lng };
    // The map, centered at Uluru
    let map = new google.maps.Map(
      document.getElementById('map'), { zoom: 15, center: uluru });
    // The marker, positioned at Uluru
    let marker = new google.maps.Marker({ position: uluru, map: map });
  }

  initMap() { // From Google Maps API Docs
  } 


  render() {
    return(
    <div id="map" className="activity-show-map">
    </div>
    )
  }

};

export default ShowMap;