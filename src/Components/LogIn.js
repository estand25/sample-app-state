import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
// import Orientation from 'react-native-orientation';
import { emailChanged, passwordChanged, loginUser } from '../Actions';
import Styles from '../Styles';

class LogIn extends React.Component {
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
        title='Submit'
        onPress={this.onButtonPress.bind(this)}
      />
    )
  }

  renderError() {
    if(this.props.error) {
      return (
        <View style={{ alignSelf: 'center' }} >
          <Text style={{
            fontSize: 20,
            color: 'red'
          }}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return(
      <View>
        <View>
          <TextInput
            placeholder='User Name'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
          <TextInput
            placeholder='Password'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </View>
        <View>
          {this.renderButton()}
        </View>
        <View>
          {this.renderError()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, user, error, loading } = auth;
  return { email, password, user, error, loading };
}

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LogIn);
