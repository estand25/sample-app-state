import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  TextInput,
  Text,
  Dimensions,
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
    width: 100,
    widthLandscape: 650,
    widthPortrait: 370
  };

  constructor(props) {
    super(props);

    this._focusNextField = this._focusNextField.bind(this);
    this.inputs = {};
  }

  _focusNextField(id){
    this.inputs[id].focus();
  }

  onTitleChanged(text) {
    this.props.titleChanged(text);
  }

  onNoteChanged(text) {
    this.props.noteChanged(text);
  }

  onNoteSavePress({ title, note, uid }) {
    this.props.noteSave({title, note, uid});
  }

  onNoteCreatePress({ title, note }) {
    this.props.noteCreate({ title, note });
  }

  handleClick = () => {
    const { navigation } = this.props;
    const uid = navigation.getParam('uid','NO-UID');
    const { title, note, user } = this.props;

    // console.log(`handleClick() uid: ${uid}`);

    if(uid == 'NO-UID'){
      // console.log(`handleClick() onNoteCreatePress`);
      this.onNoteCreatePress({ title, note })
    } else {
      // console.log(`handleClick() onNoteSavePress`);
      this.onNoteSavePress({ title, note, uid: user.uid})
    }
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


  onLayout(e) {
    const {width, height} = Dimensions.get('window');
    if(width > height){
      var orientation = 'LANDSCAPE';
    } else {
      var orientation = 'PORTRAIT';
    }

    console.log(`Orientation: ${orientation}`);
    this._orientationDidChange(orientation);
    this.props.orientationChanged(orientation);
  }

  render() {
    const { width } = this.state;
    const { navigation } = this.props;

    console.log(`render() Navigation: ${navigation}`);
    console.log(Object.keys(navigation));

    const uid = navigation.getParam('uid','NO-UID');
    const title = navigation.getParam('title','NO-TITLE');
    const note = navigation.getParam('note','NO-NOTE');
    const buttonText = uid == 'NO-UID' ? 'Add Note' : 'Update Note';

    console.log(`render() Title: ${title}, Note: ${note}, & uid: ${uid}`);

    let newStyle = {
      width
    }

    return (
      <View
        onLayout={this.onLayout.bind(this)}
        style={Styles.container}
      >
        <View style={{ flex: 2, padding: 10, backgroundColor: '#181c36', borderColor: '#0077b3', width: width}}>
          <TextInput
            ref={ input => {
              this.inputs['1'] = input;
            }}
            placeholder='Title'
            placeholderTextColor='#0077b3'
            editable={true}
            multiline={true}
            maxLength={50}
            keyboardAppearance='dark'
            value={this.props.title}
            onChangeText={this.onTitleChanged.bind(this)}
            style={Styles.noteTextInput}
            blurOnSubmit={false}
            onSubmitEditing={() => this._focusNextField('2')}
            returnKeyType={'next'}
          />
        </View>
        <View style={{ flex: 2, padding: 10, backgroundColor: '#181c36', width: width}}>
          <TextInput
            ref={ input => {
              this.inputs['2'] = input;
            }}
            placeholder="Note"
            placeholderTextColor='#0077b3'
            editable={true}
            multiline={true}
            maxLength={250}
            keyboardAppearance='dark'
            value={this.props.note}
            onChangeText={this.onNoteChanged.bind(this)}
            style={Styles.noteTextInput}
            returnKeyType={'done'}
            blurOnSubmit={true}
          />
        </View>
        <View style={Styles.noteButtonView}>
          <Button
            type='custom'
            onPress={this.handleClick.bind(this)}
            backgroundColor={'#181c36'}
            borderColor={'#0077b3'}
            borderRadius={5}
            shadowHeight={2}
          >
            {buttonText}
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
