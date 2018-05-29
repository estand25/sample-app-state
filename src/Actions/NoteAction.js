import firebase from 'firebase';
import {
  goToBoard
} from './NavAction'
import {
  SELECT_NOTE,
  ALL_NOTES,
  TITLE_CHANGED,
  NOTE_CHANGED,
  SAVE_NOTE_SUCCESS,
  CREATE_NOTE_SUCCESS,
  NOTE_FETCH_SUCCESS,
  DELETE_NOTE,
  NOTE_FETCH_SUCCESS_COMPLETED,
} from './types';

export const selectNote = ({title, note}) => ({
  type: SELECT_NOTE,
  payload: note
});

export const titleChanged = (title) => ({
  type: TITLE_CHANGED,
  payload: title
});

export const noteChanged = (note) => ({
  type: NOTE_CHANGED,
  payload: note
});

export const noteSave = ({ title, note, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/notes/${uid}`)
      .set({ title, note })
      .then(() =>{
        dispatch({ type: SAVE_NOTE_SUCCESS });
        goToBoard(dispatch);
      })
  };
};

export const noteCreate = ({ title, note }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/notes`)
      .push({ title, note })
      .then(() => {
        dispatch({ type: CREATE_NOTE_SUCCESS });
        goToBoard(dispatch);
      })
  };
};

export const notesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/notes`)
      .on('value', snapshot => {
        dispatch({
          type: NOTE_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
      // dispatch({ type: NOTE_FETCH_SUCCESS_COMPLETED });
  };
};

export const noteDelete = ({ uid }) => (dispatch) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/notes/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: DELETE_NOTE });
      });
  };
};
