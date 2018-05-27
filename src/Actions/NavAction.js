import { StackActions, NavigationActions } from 'react-navigation';
import {
  GOTO_BOARD
} from './types';

export const goToBoard = (dispatch) => {
  dispatch(NavigationActions.navigate({
    routeName: 'Board',
  }));
}

export const goToLogOut = (dispatch) => {
  const resetAction = StackActions.reset({
    index: 1,
    actions: [
      NavigationActions.navigate({ routeName: 'LogOut' }),
    ],
  });

  dispatch(resetAction)
}
