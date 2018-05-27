import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../Components/Navigator';
import {
  GOTO_BOARD
} from '../Actions/types';

const router = AppNavigator.router;
const logInNavAction = router.getActionForPathAndParams('LogIn')
const initialNavState = router.getStateForAction(logInNavAction)

const boardNavAction = router.getActionForPathAndParams('Board')
const stateForBoard = router.getStateForAction(boardNavAction);

const noteNavAction = router.getActionForPathAndParams('Note')
const stateForNote = router.getStateForAction(noteNavAction)

export default (state = initialNavState, action) => {
 //   // console.log(`ReducerNav1 - ${GOTO_BOARD} - action.type ${action.type}`);
 // switch (action.type) {
 //   case GOTO_BOARD:
 //     //  console.log(`ReducerNav2 - ${GOTO_BOARD}, boardNavAction - ${boardNavAction}, stateForBoard - ${stateForBoard}`);
 //     // return router.getStateForAction(boardNavAction, stateForBoard);
 //     return router.getComponentForRouteName('Board');
 //   default:
 console.log(`default - ${action.type}`);
  // return router.getStateForAction(action, state);
 // }
 const newState = router.getStateForAction(action, state);
 return newState || state;
};
