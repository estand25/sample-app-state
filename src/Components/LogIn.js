import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../Actions';
import Styles from '../Styles';

class LogIn extends React.Component {
  onEmailChange(text) {
    // console.log(`onEmailChange - Email: ${text} `);
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    // console.log(`onPasswordChange - Password: ${text} `);
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    console.log(`onButtonPress - Email: ${email} Password: ${password} `);
    this.props.loginUser({ email, password });
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
        <Button
          title='Submit'
          onPress={this.onButtonPress.bind(this)}
        />
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
