import {
  ORIENTATION
} from '../Actions'

const INITIAL_STATE = {
  orientation: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORIENTATION:
      return { ...state, orientation: action.payload };
    default:
      return state;
  }
}
