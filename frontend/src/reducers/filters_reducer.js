import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {},
  time: [
    "7:00AM",
    "8:00AM",
    "9:00AM",
    "10:00AM",
    "11:00AM",
    "12:00PM",
    "1:00PM",
    "2:00PM",
    "3:00PM",
    "4:00PM",
    "5:00PM",
    "6:00PM",
    "7:00PM",
    "8:00PM",
    "9:00PM"
  ], 
  day: [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
  ]
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
