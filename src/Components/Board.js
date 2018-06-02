import _ from 'lodash'
import React from 'react'
import {
  connect
} from 'react-redux';
import {
  View,
  TextInput,
  Text,
  FlatList,
  ActivityIndicator,
  Platform
} from 'react-native'
import Button from 'react-native-flat-button'
import {
  notesFetch
} from '../Actions'
import NoteListItem from './NoteListItem'
import NoteList from './NoteList';
import Styles from '../Styles'

class Board extends React.Component {
  componentWillMount() {
    this.props.notesFetch();
  }

  static navigationOptions  = ({ navigation }) => {
    return {
      title: 'Board',
      headerRight: (
        <Button
          type='custom'
          backgroundColor={'#181c36'}
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
    const { orientation } = this.props;
    console.log(`Board Orientation: ${orientation}`);

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
        <NoteList
          notes={this.props.notes}
          navigation={this.props.navigation}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const notes = _.map(state.notes, (val, uid) => ({ ...val, uid }));
  const { orientation } = state.orie;
  return { notes, orientation };
}

export default connect(mapStateToProps,{
  notesFetch
})(Board);
