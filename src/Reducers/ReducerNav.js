import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../Components/Navigator';

const router = AppNavigator.router;
const mainNavAction = router.getActionForPathAndParams('LogIn');
const initialNavState = router.getStateForAction(mainNavAction);

export default (state = initialNavState, action) => {
  return router.getStateForAction(action, state);
};
