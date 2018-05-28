import { combineReducers } from 'redux';
import active_note from './reducer_active_note';
import ReducerNav from './ReducerNav';
import ReducerUser from './ReducerUser';
import ReducerOrie from './ReducerOrie'

const rootReducer = combineReducers({
  activeNote: active_note,
  navigation: ReducerNav,
  auth: ReducerUser,
  orie: ReducerOrie,
});

export default rootReducer;
