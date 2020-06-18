import React from 'react';
import './search.css';


const handleChange = (filter, updateFilter, fetchActivitiesFiltered) => e => {
  const p1 = new Promise( (resolve, reject) => {
    updateFilter(filter, [e.currentTarget.value]);
    resolve()
  })
  const p2 = new Promise( (resolve, reject) => {
    fetchActivitiesFiltered()
    resolve()
  })

  p1.then(() => p2)
};

const handleReset = (updateFilter, fetchActivitiesFiltered) => e => {
  // need to seperate the updatefilter and fetching methods.
  const p1 = new Promise( (resolve, reject) => {
    updateFilter('time', allTimes)
    updateFilter('day', 'null')
    resolve()
  })
  const p2 = new Promise( (resolve, reject) => {
    fetchActivitiesFiltered()
    resolve()
  })

  p1.then(() => p2)

  document.getElementById('filter-date').value = ''
  document.getElementById('time-dropdown').selectedIndex = 0
};

const allTimes = [
  "7:00AM",
  "7:30AM",
  "8:00AM",
  "8:30AM",
  "9:00AM",
  "9:30AM",
  "10:00AM",
  "10:30AM",
  "11:00AM",
  "11:30AM",
  "12:00PM",
  "12:30PM",
  "1:00PM",
  "1:30PM",
  "2:00PM",
  "2:30PM",
  "3:00PM",
  "3:30PM",
  "4:00PM",
  "4:30PM",
  "5:00PM",
  "5:30PM",
  "6:00PM",
  "6:30PM",
  "7:00PM",
  "7:30PM",
  "8:00PM",
  "8:30PM",
  "9:00PM",
  "9:30PM",
];

const allDays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday"
];

const FilterForm = ( props ) => (
  <div>
    <div className="filter-header"> Filters:</div> 
    <div className="filter-container">
      <select size="1" 
              className="time-dropdown" 
              id="time-dropdown" 
              onChange={handleChange('time', props.updateFilter, props.fetchActivitiesFiltered )}
              defaultValue={''}
      >
        <option value="" disabled>Pick a Time</option>
        <option value="8:00AM">8:00AM</option>
        <option value="8:30AM">8:30AM</option>
        <option value="9:00AM">9:00AM</option>
        <option value="9:30AM">9:30AM</option>
        <option value="10:00AM">10:00AM</option>
        <option value="10:30AM">10:30AM</option>
        <option value="11:00AM">11:00AM</option>
        <option value="11:30AM">11:30AM</option>
        <option value="12:00PM">12:00PM</option>
        <option value="12:30PM">12:30PM</option>
        <option value="1:00PM">1:00PM</option>
        <option value="1:30PM">1:30PM</option>
        <option value="2:00PM">2:00PM</option>
        <option value="2:30PM">2:30PM</option>
        <option value="3:00PM">3:00PM</option>
        <option value="3:30PM">3:30PM</option>
        <option value="4:00PM">4:00PM</option>
        <option value="4:30PM">4:30PM</option>
        <option value="5:00PM">5:00PM</option>
        <option value="5:30PM">5:30PM</option>
        <option value="6:00PM">6:00PM</option>
        <option value="6:30PM">6:30PM</option>
        <option value="7:00PM">7:00PM</option>
        <option value="7:30PM">7:30PM</option>
        <option value="8:00PM">8:00PM</option>
        <option value="8:30PM">8:30PM</option>
        <option value="9:00PM">9:00PM</option>
        <option value="9:30PM">9:30PM</option>
        <option value="10:00PM">10:00PM</option>
      </select>
      <input 
        type="date" 
        className="filter-date" 
        id="filter-date" 
        onChange={handleChange('day', props.updateFilter, props.fetchActivitiesFiltered )}
      />
      <button 
        onClick={handleReset(props.updateFilter, props.fetchActivitiesFiltered )}
        className="reset-filters"
      >
        Reset Filters
      </button>

      {/* <select className="day-dropdown" onChange={handleChange('day', props.updateFilter )} >
          <option value="" disabled selected>Pick a Day</option>
          <option value="all">Show All</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
      </select> */}


    </div>
    <div>

      

    </div>
  </div>
);

export default FilterForm;
