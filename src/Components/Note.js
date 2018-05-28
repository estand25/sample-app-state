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
  orientationChanged
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
        <View style={{ flex: 1, padding: 10, backgroundColor: '#fff', width: width}}>
          <TextInput
            placeholder='Title'
            editable={true}
            maxLength={2}
            // style={{ flex: 1}}
            value={noteTitle}
          />
        </View>
        <View style={{ flex: 2, padding: 10, backgroundColor: '#fff', width: width}}>
          <TextInput
            placeholder="Note"
            editable={true}
            maxLength={40}
            // style={{ flex: 1}}
            value={noteBody}
          />
        </View>
      </View>
    );
  }
}

 const mapStateToProps = ({ orie }) => {
   const { orientation } = orie;
   return { orientation };
 }

export default connect(mapStateToProps, {orientationChanged})(Note);
