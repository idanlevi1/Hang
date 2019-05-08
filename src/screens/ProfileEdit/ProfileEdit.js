import React from 'react';
import { View, Text } from 'react-native';
import styles from './Style';
import { HeaderParallax } from '../../components';
import GStyle from '../../utils/GlobalStyles';

export default class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('Profile Edit Screen')
  }

  render() {
    return (
      <HeaderParallax
        navigation={this.props.navigation}
        backgroundColor={GStyle.BLACK}
        navbarColor={GStyle.BLACK}
        backButton={true}
        title='Profile Edit'>
        <View style={{ backgroundColor: GStyle.BEIGE }}>
          <Text style={{ fontSize: 24, color: GStyle.BEIGE }}>Profile Edit</Text>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(e => <Text key={e} style={{ color: GStyle.BLACK, fontSize: 24, padding: 5, margin: 10, borderBottomWidth: 1 }}>{e}</Text>)}
        </View>
      </HeaderParallax>
    );
  }
}
