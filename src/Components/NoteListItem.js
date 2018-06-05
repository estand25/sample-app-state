import React from 'react';
import {
  connect
} from 'react-redux';
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native';
import {
  NavigationActions,
} from 'react-navigation';
import {
  gotoSaveNote
} from '../Actions';
import Styles from '../Styles';

class NoteListItem extends React.Component {
  onButtonPress() {
    const { title, note, uid } = this.props.noteItem;
    // console.log(`Title: ${title}, Note: ${note}, & uid: ${uid}`);
    this.props.gotoSaveNote({ title, note, uid });
  }
  render() {
    const { title, note } = this.props.noteItem;

    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center' }}
        >
        <TouchableHighlight
          onPress={this.onButtonPress.bind(this)}
          style={{
            marginTop: 5,
            marginBottom: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0077b3',
            borderRadius: 5,
           }}
          >
          <View>
            <Text>{title}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default connect(null, {gotoSaveNote})(NoteListItem);
