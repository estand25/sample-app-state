import { combineReducers } from 'redux';
import active_note from './reducer_active_note';

const rootReducer = combineReducers({
  activeNote: active_note,
});

export default rootReducer;
