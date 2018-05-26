import React from 'react';
import { connect } from 'react-redux';
import {
  createStackNavigator,
} from 'react-navigation';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import Board from './Board';
import Note from './Note';
import LogIn from './LogIn';

export const AppNavigator = createStackNavigator({
  Main: Board,
  Note: Note,
  LogIn: LogIn,
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
