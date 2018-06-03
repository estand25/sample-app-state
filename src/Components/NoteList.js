import React from 'react';
import _ from 'lodash';
import {
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';
import Button from 'react-native-flat-button';
import NoteListItem from './NoteListItem';
import Styles from '../Styles';

class NoteList extends React.Component {
  renderItem({ item }){
    return <NoteListItem
              noteItem={item}
            />;
  }

  noteList() {
    console.log(`NoteList: ${this.props.navigation}`);
    return (
      <FlatList
        data={this.props.notes}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.uid}
      />
    );
  }

  render(){
    return(
      <View>
        {this.noteList()}
      </View>
    );
  };
}

export default NoteList;
