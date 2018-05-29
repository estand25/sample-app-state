import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import Button from 'react-native-flat-button';
import {
  emailChanged,
  passwordChanged,
  loginUser,
  orientationChanged,
} from '../Actions';
import Styles from '../Styles';

class LogIn extends React.Component {
  static navigationOptions = {
    title: 'Log In',
    headerStyle: {
      padding: 5
    }
  }

  componentDidMount () {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.ALL);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if(this.props.loading){
      return <ActivityIndicator size='large' />
    }

    return (
      <Button
        type='custom'
        onPress={this.onButtonPress.bind(this)}
        backgroundColor={'#181c36'}
        borderColor={'#0077b3'}
        borderRadius={5}
        shadowHeight={2}
      >
        Submit
      </Button>
    )
  }

  renderError() {
    if(this.props.error) {
      return (
        <View style={{ alignSelf: 'center' }}
        >
          <Text style={Styles.logInErrorText}>
            {this.props.error}
          </Text>
        </View>
      );
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
  }

  render() {
    return(
      <View
        onLayout={this.onLayout.bind(this)}
        style={Styles.borderView}>
        <View>
          <View>
            <Text style={Styles.logInLabelText}>
              Email:
            </Text>
            <TextInput
              placeholder='email@gmail.com'
              placeholderTextColor='white'
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
              style={Styles.logInTextInput}
            />
          </View>
            <View>
              <Text style={Styles.logInLabelText}>
                Password:
              </Text>
              <TextInput
                secureTextEntry={true}
                placeholder='*******'
                placeholderTextColor='white'
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
                style={Styles.logInTextInput}
              />
          </View>
        </View>
        <View style={Styles.backGroundView}>
          {this.renderButton()}
        </View>
        <View style={Styles.backGroundView}>
          {this.renderError()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ auth, orie }) => {
  const { email, password, user, error, loading } = auth;
  const { orientation } = orie;
  return { email, password, user, error, loading, orientation };
}

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, orientationChanged
})(LogIn);
