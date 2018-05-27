import { NavigationActions } from 'react-navigation';
import {
  GOTO_BOARD
} from './types';

export const goToBoard = (dispatch) => {
  // console.log(`NavAction - ${GOTO_BOARD}`);
  // dispatch({ type: GOTO_BOARD });
  dispatch(NavigationActions.navigate({
    routeName: 'Board',
  }));
}
