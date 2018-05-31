import React from 'react';
import {
  View,
  TouchableHighlight,
  Text
} from 'react-native';
import Button from 'react-native-flat-button';
import Styles from '../Styles';

class NoteListItem extends React.Component {
  render() {
    const { title, note } = this.props.note;
    const { navigation } = this.props;

    console.log(`Navigation: ${navigation}`);

    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('Note')}
          type='custom'
          backgroundColor={'#181c36'}
          borderColor={'#0077b3'}
          borderRadius={5}
          shadowHeight={2}
          activeOpacity={1}
        >
          {title}
        </Button>
      </View>
    );
  };
}

export default NoteListItem;
