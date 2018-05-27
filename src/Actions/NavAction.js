import {
  GOTO_BOARD
} from './types';

export const goToBoard = () => {
  console.log(`NavAction - ${GOTO_BOARD}`);
  dispatch({ type: GOTO_BOARD });
}
