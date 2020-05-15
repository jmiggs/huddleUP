import React from 'react';

import './search.css';

import Map from '../map/map';
import Filters from './filters.jsx';
import ActivityIndex from './activity_index.jsx';
import { render } from 'react-dom';
import NavBarContainer from '../navbar/navbar_container'


// filters and activity index to be added later
class Search extends React.Component {
  render() {

    return(
      <div>
        <NavBarContainer />
        <div className="search-container">
          <div className="map-half">
            <div>
              <div className="header-text">Let's play <div className="sport-type">{(this.props.type).charAt(0).toUpperCase()+(this.props.type).substring(1)} </div></div>
              <Map updateFilter={this.props.updateFilter} activities={this.props.activities} type={this.props.type} />
            </div>

          </div>
          <div className="right-half">
            <div>
              <Filters updateFilter={this.props.updateFilter} />
            </div>
            <div>
              <ActivityIndex activities={this.props.activities} />
            </div>
          </div>
        </div>
      </div>
      
    )
  }

};

export default Search;