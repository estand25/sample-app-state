import React from 'react';
import { View, Text } from 'react-native';
// import { Provider } from 'react-native';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
import Button from 'react-native-flat-button';
// import reducers from './Reducers';

class Menu extends React.Component {
  static navigationOptions = {
    title: 'Menu',
  };

  // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

  render() {
    // <Provider store={store} >
      <View>
        <View>
          <Button
            type="primary"
            onPress={() => this.props.navigation.navigate('Board')}
          >
          Board
          </Button>
        </View>
      </View>
    // </Provider>
  }
}

export default Menu;
