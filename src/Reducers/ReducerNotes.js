import {
  ALL_NOTES,
  NOTE_FETCH_SUCCESS,
} from '../Actions/types';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case NOTE_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
