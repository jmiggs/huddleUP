import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {},
  time: [
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
  ], 
  // day: [
  //   "monday",
  //   "tuesday",
  //   "wednesday",
  //   "thursday",
  //   "friday",
  //   "saturday",
  //   "sunday"
  // ]
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);


  if (action.type === UPDATE_FILTER ) {
    const newFilter = {
      [action.filter]: action.value
    };
    return Object.assign({}, state, newFilter);
  } else {
    return state;
  }
};

export default filtersReducer;
