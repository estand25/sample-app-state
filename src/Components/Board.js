import React from 'react'
import { View, TextInput, Text  } from 'react-native'
import Button from 'react-native-flat-button'
import Styles from '../Styles'

class Board extends React.Component {
  static navigationOptions  = ({ navigation }) => {
    return {
      title: 'Board',
      headerRight: (
        <Button
          type='custom'
          borderColor={'#0077b3'}
          borderRadius={5}
          onPress={() => navigation.navigate('LogOut')}
        >
          LogOut
        </Button>
      )
    }
  };

  render(){
    return (
      <View
        style={ Styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('Note')}
          type='custom'
          backgroundColor={'#0077b3'}
          borderColor={'#fff'}
          borderRadius={5}
          shadowHeight={2}
        >
          Add More Notes
        </Button>
      </View>
    )
  }
}

export default Board;
