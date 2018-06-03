import React from 'react';
import {
  connect
} from 'react-redux';
import {
  View,
  TouchableHighlight,
  Text,
  Dimensions
} from 'react-native';
import Button from 'react-native-flat-button';
import {
  orientationChanged
} from '../Actions';
import Styles from '../Styles';

NoteListItem = ({noteItem}) => {
    const { title, note } = noteItem;

    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center' }}
        >
        <TouchableHighlight
          // onPress={() => this.props.navigation.navigate('Note')}
          style={{
            marginTop: 5,
            marginBottom: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0077b3',
            borderRadius: 5,
            shadowColor: '#fff',
            shadowOffset: { width: 0, height: 10 },
            shadowRadius: 10,
           }}
          >
          <View>
            <Text>{title}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
}

export default NoteListItem;
