import {
  SELECT_NOTE,
  TITLE_CHANGED,
  NOTE_CHANGED,
  SAVE_NOTE_SUCCESS,
  CREATE_NOTE_SUCCESS,
  DELETE_NOTE,
} from '../Actions/types';

const INITIAL_STATE = {
  selectedNote: '',
  note: '',
  title: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_NOTE:
      return action.payload;
    case SAVE_NOTE_SUCCESS:
      return INITIAL_STATE;
    case CREATE_NOTE_SUCCESS:
      return INITAL_STATE;
    case DELETE_NOTE:
      return INITAL_STATE;
    case TITLE_CHANGED:
      return { ...state, title: action.payload };
    case NOTE_CHANGED:
      return { ...state, note: action.payload };
    default:
      return state;
  }
};
