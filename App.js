import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import Reducers from './src/Reducers';
import AppWithNavigationState from './src/Components/Navigator';

const store = createStore(Reducers);

export default class App extends React.Component {
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyDolkm7UqD9aaeCdBl7bEuEBurBmqSzTcQ",
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
