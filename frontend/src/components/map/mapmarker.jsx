const google = window.google

class MapMarker {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
    
  }

  updateMarkers(activities) {
   
    // takes all locations shown on the map for idling. to be used to compare against
    // what was saved in this.markers from the map's previous idle position
    const markerTracker = {};
    activities.forEach(activity => markerTracker[activity._id] = activity);

    // to select the new locations as a result of the map moving, and
    // create that marker using this.createMarker()
    activities
      .filter(activity => !this.markers[activity._id])
      .forEach(newActivity => this.createMarker(newActivity))



    // compares locations saved in this.markers from map's previous idle position, and
    // to the new locations shown on the map's new idle position. the deltas are removed
    // using this.removeMarker()
    Object.keys(this.markers)
      .filter(activityId => !markerTracker[activityId])
      .forEach(activityId => this.removeMarker(this.markers[activityId]))

  
    
  }

  createMarker(activity) {
    // setting the lat and lng of the location, to be passed in the google map's marker
    // construction fx
    const position = new google.maps.LatLng(activity.lat, activity.lng);

    // marker is placed on the map upon creation of the marker,
    // using google map's marker construction fx
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      activityId: activity._id
    });

    // add to markers hash collection
    this.markers[activity._id] = marker;
  }

  removeMarker(marker) {
    // line 52 removes marker from the map as per google API docs.
    // line 53 deletes marker from this.markers hash collection.

    marker.setMap(null);
    delete this.markers[marker.activityId];
   
  }

}

export default MapMarker;