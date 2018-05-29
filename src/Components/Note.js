import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  TextInput,
  Text,
  Dimensions
} from 'react-native';
import Button from 'react-native-flat-button';
import {
  orientationChanged,
  noteSave,
  titleChanged,
  noteChanged,
  noteCreate,
  noteDelete,
} from '../Actions';
import Styles from '../Styles';

class Note extends React.Component {
  state = {
    noteTitle: '',
    noteBody: '',
    width: 100,
    widthLandscape: 650,
    widthPortrait: 370
  };

  onTitleChanged(text) {
    this.props.titleChanged(text);
  }

  onNoteChanged(text) {
    this.props.noteChanged(text);
  }

  onNoteAddPress() {
    const { title, note, user } = this.props;
    this.props.noteSave({title, note, uid: user.uid});
  }

  onNoteCreatePress() {
    const { title, note } = this.props;
    this.props.noteCreate({ title, note });
  }

  _orientationDidChange(orientation){
    const { widthLandscape, widthPortrait } = this.state;
    if(orientation == 'LANDSCAPE'){
      this.setState({width: widthLandscape})
    } else {
      this.setState({width: widthPortrait})
    }
  }

  static navigationOptions = ({ navigation }) =>{
    return {
      title: 'Note',
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


  onLayout(e) {
    const {width, height} = Dimensions.get('window');
    if(width > height){
      var orientation = 'LANDSCAPE';
    } else {
      var orientation = 'PORTRAIT';
    }

    console.log(`Orientation: ${orientation}`);
    this.props.orientationChanged(orientation);
    this._orientationDidChange(orientation);
  }

  render() {
    const { noteTitle, noteBody, width } = this.state;

    let newStyle = {
      width
    }

    return (
      <View
        onLayout={this.onLayout.bind(this)}
        style={Styles.container}
      >
        <View style={{ flex: 2, padding: 10, backgroundColor: '#181c36', width: width}}>
          <TextInput
            placeholder='Title'
            placeholderTextColor='#0077b3'
            editable={true}
            multiline={true}
            maxLength={50}
            value={this.props.title}
            onChangeText={this.onTitleChanged.bind(this)}
            style={Styles.noteTextInput}
          />
        </View>
        <View style={{ flex: 2, padding: 10, backgroundColor: '#181c36', width: width}}>
          <TextInput
            placeholder="Note"
            placeholderTextColor='#0077b3'
            editable={true}
            multiline={true}
            maxLength={250}
            keyboardAppearance='dark'
            value={this.props.note}
            onChangeText={this.onNoteChanged.bind(this)}
            style={Styles.noteTextInput}
          />
        </View>
        <View style={Styles.noteButtonView}>
          <Button
            type='custom'
            backgroundColor={'#181c36'}
            borderColor={'#0077b3'}
            borderRadius={5}
            shadowHeight={2}
          >
            Add Note
          </Button>
        </View>
      </View>
    );
  }
}

 const mapStateToProps = ({ orie, currentNote, auth }) => {
   const { orientation } = orie;
   const { title, note } = currentNote;
   const { user } = auth;
   return { orientation, title, note, user };
 }

export default connect(mapStateToProps, {
  orientationChanged,
  noteSave,
  titleChanged,
  noteChanged,
  noteCreate,
  noteDelete,
})(Note);
