import React from 'react';
import { connect } from 'react-redux';
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

class NoteListItem extends React.Component {
  state = {
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
    const { width } = this.state;
    const { title, note } = this.props.note;
    const { navigation } = this.props;

    console.log(`Navigation: ${navigation}`);

    return (
      <View
        onLayout={this.onLayout.bind(this)}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: width }}
        >
        <TouchableHighlight
          style={{
            marginBottom: 10,
            alignItems: 'center',
            backgroundColor: '#0077b3',
            borderRadius: 5,
            width: width }}
          >
          <View>
            <Text>{title}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  };
}

//onPress={() => this.props.navigation.navigate('Note')}
//type='custom'
//backgroundColor={'#181c36'}
//borderColor={'#0077b3'}
//borderRadius={5}
//shadowHeight={2}
//activeOpacity={1}
const mapStateToProps = ({ orie }) => {
  const { orientation } = orie;
  return { orientation };
}
export default connect(mapStateToProps, {
  orientationChanged
})(NoteListItem);
