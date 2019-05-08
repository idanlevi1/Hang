import React from 'react';
import { View, Text } from 'react-native';
import styles from './Style';
import AwesomeButton from 'react-native-really-awesome-button';
// import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

export default class Button extends React.Component {
  _onPress = next => {
    this.props.onPress && this.props.onPress();
    console.log('next');
    next();
  };

  render() {
    const { disabled, text } = this.props;
    return (
      //https://github.com/rcaferati/react-native-really-awesome-button
      <AwesomeButton
        onPress={next => {
          this._onPress(next);
        }}
        progress
        disabled={disabled}
        // borderWidth={2}
        borderRadius={0}
        raiseLevel={4}
        type="primary"
      >
        {text}
      </AwesomeButton>
    );
  }
}
