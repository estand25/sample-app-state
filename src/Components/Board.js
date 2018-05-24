import React from 'react';
import { View } from 'react-native';
import Button from 'react-native-flat-button';

class Board extends React.Component {
  render(){
    return (
      <View
        style={{ flex: 1}}>
        <View
          borderColor='#181c36'
        />
      </View>
    )
  }
}

export default Board;
