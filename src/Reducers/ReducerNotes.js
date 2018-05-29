import {
  ALL_NOTES,
  NOTE_FETCH_SUCCESS,
  NOTE_FETCH_SUCCESS_COMPLETED,
} from '../Actions/types';

const INITIAL_STATE = {
  // loading: false,
}

export default (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case NOTE_FETCH_SUCCESS:
      return action.payload;
    case NOTE_FETCH_SUCCESS_COMPLETED:
      // return { ...state, loading: true};
      return state;
    default:
      return state;
  }
}
