import React from 'react';
import { View, Text } from 'react-native';
import styles from './Style';

export default class ThePlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>ThePlace</Text>
      </View>
    );
  }
}
