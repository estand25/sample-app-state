import React from 'react';
import { View, TextInput, Text, Dimensions } from 'react-native';
import Button from 'react-native-flat-button';
import Orientation from 'react-native-orientation'
import Styles from '../Styles';

class Note extends React.Component {
  state = {
    value: '',
    width: 100,
    widthLandscape: 350,
    widthPortrait: 400
  };
// var Orientation = require('react-native-orientation');
  _orientationDidChange(orientation){
    const { widthLandscape, widthPortrait } = this.state;
    if(orientation == 'LANDSCAPE'){
      this.setState({width: widthLandscape})
    } else {
      this.setState({width: widthPortrait})
    }
  }

  componentWillMount() {
    var initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {
      this.setState({width: widthPortrait})
    } else {
      this.setState({width: widthLandscape})
    }
  }
  
  componentWillUnmount() {
    Orientation.getOrientation((err,orientation)=> {
      console.log("Current Device Orientation: ", orientation);
    });
    Orientation.removeOrientationListener(this._orientationDidChange);
  }

  // updateSize = (width) =>{
  //   this.setState({width});
  // }

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

  render() {
    const { value, width } = this.state;

    let newStyle = {
      width
    }

    console.log(`Width: ${width}`);
    return (
      <View style={Styles.container}>
        <View style={{ flex: 1, padding: 10, backgroundColor: '#fff'}}>
          <TextInput
            placeholder='Title'
            editable={true}
            multiline={true}
            // onChangeText={(value) => this.setState({value})}
            style={[newStyle]}
            value={value}
            // onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.width)}
          />
        </View>
        <View style={{ flex: 2, padding: 10, backgroundColor: '#fff'}}>
          <TextInput
            placeholder="Note"
            editable={true}
            maxLength={40}
            style={{alignItems: 'stretch'}}
          />
        </View>
      </View>
    );
  }
}

export default Note;
