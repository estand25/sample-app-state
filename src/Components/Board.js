import React from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Text  } from 'react-native';
import Button from 'react-native-flat-button';
import { selectNote  } from '../Actions/';
import Styles from '../Styles';

class Board extends React.Component {
  render(){
    return (
      <View
        style={ Styles.container}>
        <View style={{ flex: 1, top:0, alignContent:'flex-end'}}>
          <Button
            onPress={() => this.props.navigation.navigate('LogOut')}
            type='custom'
            backgroundColor={'#0077b3'}
            borderColor={'#fff'}
            borderRadius={5}
            shadowHeight={2}
          >
            LogOut
          </Button>
        </View>
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
// const mapStateToProps = (state) => {
//   const { selectedNote }
// }
export default Board;
