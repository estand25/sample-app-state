import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types'
import {
  goToBoard
} from './NavAction'

export const emailChanged = (text) => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = (text) => ({
  type: PASSWORD_CHANGED,
  payload: text
});

export const loginUser = ({ email, password }) => (dispatch) => {
  dispatch({ type: LOGIN_USER });
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => logInUserSuccess(dispatch, user))
    .catch(() =>{
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => logInUserSuccess(dispatch, user))
        .catch(() => logInUserFail(dispatch));
    });
};

const logInUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const logInUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: loginUser
  });

  goToBoard(dispatch);

}
