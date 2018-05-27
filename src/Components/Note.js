import React from 'react';
import { View, TextInput, Text } from 'react-native';
import Styles from '../Styles';

class Note extends React.Component {
  static navigationOptions = {
    title: 'Note'
  };

  render() {
    return (
      <View style={Styles.container}>
        <View style={{ flex: 1, padding: 10, backgroundColor: '#fff'}}>
          <TextInput
            placeholder="Title"
            editable={true}
            maxLength={40}
          />
        </View>
        <View style={{ flex: 2, padding: 10, backgroundColor: '#fff'}}>
          <TextInput
            placeholder="Note"
            editable={true}
            maxLength={40}
          />
        </View>
      </View>
    );
  }
}

export default Note;
