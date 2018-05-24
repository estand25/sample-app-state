import { Navigator } from '../Components/Navigator';
import { NavigationActions } from 'react-navigation';

const initialAction = { type: NavigationActions.Init }
const initialState = Navigator.router.getStateForAction(initialAction)

export default (state = initialState, action) => {
  let newState = Navigator.router.getStateForAction(action, state)

  if(action.params && action.params.replace){
    const { index } = newState
    newState.routes.splice(index - 1, 1)
    newState.index--
  }

  return newState
}
