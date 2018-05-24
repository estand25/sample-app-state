import { SELECT_NOTE, ALL_NOTES } from '../Actions/types';

const INITIAL_STATE = {
  selectedNote: '',
  notes: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_NOTE:
      return action.payload;
    case ALL_NOTES:
      return action.payload;
    default:
      return state;
  }
};
