import React from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Text  } from 'react-native';
import Button from 'react-native-flat-button';
import { selectNote  } from '../Actions/';
import Styles from '../Styles';

class Board extends React.Component {
  AddNote() {
    return (
      <View>
        <Text>
          Test
        </Text>
        <TextInput style={{height: 10, borderColor: 'gray', borderWidth: '1'}}/>
      </View>
    )
  }

  render(){
    return (
      <View
        style={ Styles.container}>
        <Button
          onPress={() => this.AddNote.bind(this)}
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
