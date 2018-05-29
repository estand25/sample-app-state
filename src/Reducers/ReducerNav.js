import { AppNavigator } from '../Components/Navigator';

const router = AppNavigator.router;
const logInNavAction = router.getActionForPathAndParams('LogIn')
const initialNavState = router.getStateForAction(logInNavAction)

export default (state = initialNavState, action) => {
 const newState = router.getStateForAction(action, state);
 return newState || state;
};
