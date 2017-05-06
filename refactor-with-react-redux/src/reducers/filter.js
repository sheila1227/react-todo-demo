import { CHANGE_FILTER } from './../actions/actions';

const initialFilter = 'ALL';

export default (state = initialFilter, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};
