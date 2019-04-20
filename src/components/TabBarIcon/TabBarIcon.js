import React from 'react';
// import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { Colors } from '../../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      // <Ionicons
      //   name={this.props.name}
      //   size={32}
      //   style={{ marginBottom: -3}}
      //   color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      // />
      <Text
        style={{
          color: this.props.focused
            ? Colors.tabIconSelected
            : Colors.tabIconDefault,
        }}
      >
        {this.props.name}
      </Text>
    );
  }
}
