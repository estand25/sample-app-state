import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import logger from 'redux-logger';

import navigation from './src/Reducers/reducer_nav';
import Navigator, { middleware } from './src/Components/Navigator';

const reducer = combineReducers({ navigation });
const store = createStore(reducer, applyMiddleware(logger,middleware));

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
        <Navigator />
      </Provider>
    );
  }
}
