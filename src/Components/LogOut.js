import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, Button } from 'react-native';
import Styles from '../Styles';

class LogOut extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 30, color: 'white' }}>
          Logging Out
        </Text>
      </View>
    )
  }
}

export default LogOut;
