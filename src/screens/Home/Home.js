import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Style';
import { Button, HeaderParallax } from '../../components';
import { flyColors } from '../../constants/Colors'

export default class HOME extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <HeaderParallax
        backgroundImage={require('../../../assets/images/Header/dashboard.jpg')}
        backgroundColor={flyColors.header}
        navbarColor={flyColors.header}
        title='Home'>
        <View style={{ backgroundColor: flyColors.background }}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(e => <Text key={e} style={{  color: flyColors.text, fontSize: 24, padding: 5, margin: 10, borderBottomWidth: 1 }}>{e}</Text>)}
        </View>
      </HeaderParallax>
    );
  }
}
