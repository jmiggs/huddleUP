import { fetchActivitiesFiltered } from './activities_actions'

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  // dispatches action to change ui filters
  // uses those new filters to grab the activities that satisfies those filters
  dispatch(changeFilter(filter, value))
};