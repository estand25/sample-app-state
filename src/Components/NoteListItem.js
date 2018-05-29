import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

class NoteListItem extends React.Component {
  onRowPress() {
    this.props.navigation.navigate('Note');
  }

  render() {
    const { title, note } = this.props.note;

    return (
      <TouchableHighlight
        onPress={this.onRowPress.bind(this)}
        >
        <View>
          <Text>
            {title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  };
}

export default NoteListItem;
