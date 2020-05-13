

class MapMarker {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers() {
    console.log('this should be run')
  }

}

export default MapMarker;