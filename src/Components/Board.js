import _ from 'lodash'
import React from 'react'
import {
  connect
} from 'react-redux';
import {
  View,
  TextInput,
  Text,
  FlatList
} from 'react-native'
import Button from 'react-native-flat-button'
import {
  notesFetch
} from '../Actions'
import NoteListItem from './NoteListItem'
import Styles from '../Styles'

class Board extends React.Component {
  componentWillMount() {
    this.props.notesFetch();
  }

  renderItem({ item }){
    return <NoteListItem note={item} />;
  }

  noteList() {
    if(_.isEmpty(this.props.notes)){
      return (
        <View
          style={Styles.borderNoteListView}>
          <Text
              style={Styles.borderNoteListText}>
            No Notes
          </Text>
        </View>
      );
    }

    console.log(this.props.notes);
    return (
      <FlatList
        data={this.props.notes}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.uid}
      />
    );
  }

  static navigationOptions  = ({ navigation }) => {
    return {
      title: 'Board',
      headerRight: (
        <Button
          type='custom'
          borderColor={'#0077b3'}
          borderRadius={5}
          onPress={() => navigation.navigate('LogOut')}
        >
          LogOut
        </Button>
      )
    }
  };

  render(){
    return (
      <View style={Styles.borderView}>
        <View
          style={ Styles.borderContainer }>
          <Button
            onPress={() => this.props.navigation.navigate('Note')}
            type='custom'
            backgroundColor={'#181c36'}
            borderColor={'#0077b3'}
            borderRadius={5}
            shadowHeight={2}
          >
            Add New Notes
          </Button>
        </View>
        <View>
          {this.noteList()}
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const notes = _.map(state.notes, (val, uid) => ({ ...val, uid }));

  return { notes };
}

export default connect(mapStateToProps,{
  notesFetch
})(Board);
