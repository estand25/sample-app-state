import React from 'react';
import { connect } from 'react-redux';
import {
  createStackNavigator,
} from 'react-navigation';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import Button from 'react-native-flat-button';

import Board from './Board';
import Note from './Note';
import LogIn from './LogIn';
import LogOut from './LogOut';

export const AppNavigator = createStackNavigator({
  Board: {
    screen: Board,
    navigationOptions: {
      headerLeft: () => null,
    }
  },
  Note: { screen: Note },
  LogIn: { screen: LogIn },
  LogOut: {
    screen: LogOut,
    navigationOptions: {
      header: () => null,
    },
  }
},{
  initialRouteName: 'LogIn',
});

export const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navigation,
);

const addListener = createReduxBoundAddListener("root");

const AppWithNavigationState = ({ dispatch, navigation }) => (
  <AppNavigator
    navigation={{ dispatch, state: navigation, addListener }}
  />
);

const mapStateToProps = (state) => ({
  navigation: state.navigation,
});

export default connect(mapStateToProps,null)(AppWithNavigationState);
