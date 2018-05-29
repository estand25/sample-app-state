import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native';
import Button from 'react-native-flat-button';
import Styles from '../Styles';

class LogOut extends React.Component {
  static navigationOptions = {
    title: 'Log-Out'
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.logOutTextInput}>
          Logging Out
        </Text>
        <Button
          type='custom'
          backgroundColor={'#181c36'}
          borderColor={'#0077b3'}
          borderRadius={5}
          onPress={() => this.props.navigation.navigate('LogIn')}
        >
          Log-In
        </Button>
      </View>
    )
  }
}

export default LogOut;
