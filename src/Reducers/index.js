import { combineReducers } from 'redux';
import ReduxerNotes from './ReducerNotes';
import ReducerNote from './ReducerNote';
import ReducerNav from './ReducerNav';
import ReducerUser from './ReducerUser';
import ReducerOrie from './ReducerOrie';

const rootReducer = combineReducers({
  notes: ReduxerNotes,
  currentNote: ReducerNote,
  navigation: ReducerNav,
  auth: ReducerUser,
  orie: ReducerOrie,
});

export default rootReducer;
