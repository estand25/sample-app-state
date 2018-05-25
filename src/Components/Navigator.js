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

export const Navigator = createStackNavigator({
  Board: Board,
  Note: Note,
},{
  initialRouteName: 'Board',
});

export const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navigation,
);

const addListener = createReduxBoundAddListener("root");

class Nav extends React.Component {
  render() {
    return (
      <Navigator navigation={{
        dispatch: this.props.dispatch,
        state: this.props.navigation,
        addListener
      }} />
    )
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation,
})

export default connect(mapStateToProps)(Nav)
