import { combineReducers } from 'redux';
import active_note from './reducer_active_note';
import ReducerNav from './ReducerNav';
import ReducerUser from './ReducerUser';

const rootReducer = combineReducers({
  activeNote: active_note,
  navigation: ReducerNav,
  auth: ReducerUser,
});

export default rootReducer;
