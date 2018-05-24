import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Menu from './src/Menu';
import Board from './src/Components/Board';

const RootStack = createStackNavigator({
  Menu: Menu,
  Board: Board,
},{
  initialRouteName: 'Menu',
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}
