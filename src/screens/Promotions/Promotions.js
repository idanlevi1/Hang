import React from 'react';
import { View, Text } from 'react-native';
import styles from './Style';
import { HeaderParallax } from '../../components';
import GStyle from '../../utils/GlobalStyles';

export default class Promotions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HeaderParallax
        backgroundImage={require('../../../assets/images/Header/promossions.jpg')}
        backgroundColor={GStyle.PINK}
        navbarColor={GStyle.PINK}
        title='Home'>
        <View style={styles.container}>
          <Text>Promossion</Text>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(e => <Text key={e} style={{ fontSize: 24, padding: 5, margin: 10, borderBottomWidth: 1 }}>{e}</Text>)}
        </View>
      </HeaderParallax>
    );
  }
}
