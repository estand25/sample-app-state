import { NavigationActions } from 'react-navigation';
import {
  GOTO_BOARD
} from './types';

export const goToBoard = (dispatch) => {
  dispatch(NavigationActions.navigate({
    routeName: 'Board',
  }));
}
