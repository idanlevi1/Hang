import React from 'react';
import { View, Text } from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#273' }}>
        <Text>Login</Text>
      </View>
    );
  }
}
