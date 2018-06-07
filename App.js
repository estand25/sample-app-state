import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';
import AppWithNavigationState from './src/Components/Navigator';

import {
  firebaseApiKey
} from './src/firebaseApiKey';

const store = createStore(Reducers, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  componentWillMount(){
    const config = {
      apiKey: firebaseApiKey,
      authDomain: "sample-app-state.firebaseapp.com",
      databaseURL: "https://sample-app-state.firebaseio.com",
      projectId: "sample-app-state",
      storageBucket: "sample-app-state.appspot.com",
      messagingSenderId: "624272019309"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
