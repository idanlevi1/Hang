import React from 'react';
import { View, Text } from 'react-native';
import styles from './Style';
import { HeaderParallax } from '../../components';
import { flyColors } from '../../constants/Colors'

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
        backgroundColor={flyColors.header}
        navbarColor={flyColors.header}
        backButton={true}
        title='Profile Edit'>
        <View style={{ backgroundColor: flyColors.background }}>
          <Text style={{ fontSize: 24, color: flyColors.text }}>Profile Edit</Text>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(e => <Text key={e} style={{ color: flyColors.text, fontSize: 24, padding: 5, margin: 10, borderBottomWidth: 1 }}>{e}</Text>)}
        </View>
      </HeaderParallax>
    );
  }
}
