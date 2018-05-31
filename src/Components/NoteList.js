import React from 'react';
import _ from 'lodash';
import { FlatList, ActivityIndicator } from 'react-native';
import Button from 'react-native-flat-button';
import NoteListItem from './NoteListItem';
import Styles from '../Styles';

class NoteList extends React.Component {
  constructor(props) {
    super(props);

  }

  renderItem({ item }){
    return <NoteListItem note={item} />;
  }
  
  noteList() {
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

export default noteList;
