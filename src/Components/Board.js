import React from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Text  } from 'react-native';
import Button from 'react-native-flat-button';
import nodejs from 'nodejs-mobile-react-native';
import { selectNote  } from '../Actions/';
import Styles from '../Styles';

class Board extends React.Component {
  componentWillMount() {
    nodejs.start('main.js');
    nodejs.channel.addListener(
      'message',
      (msg) => {
        alert('From node: ' + msg);
      },
      this
    );
  }

  AddNote = () => {
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
          onPress={() => nodejs.channel.send('A message !')}
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
