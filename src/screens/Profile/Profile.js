import React from 'react';
import { View, Text } from 'react-native';
import styles from './Style';
import { HeaderParallax, Button } from '../../components';
import { flyColors } from '../../constants/Colors';
import { inject, observer } from 'mobx-react/native';

@inject('AppStore')
@observer
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    console.log('Profile Screen');
  }

  onEditProfile = () => this.props.navigation.navigate('ProfileEdit')

  render() {
    return (
      <HeaderParallax
        backgroundColor={flyColors.header}
        navbarColor={flyColors.header}
        title="Profile"
      >
        <View style={{ backgroundColor: flyColors.background }}>
          <Button text={'Edit Profile'} onPress={this.onEditProfile} />
          <Text style={{ fontSize: 24, color: flyColors.text }}>Profile</Text>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(e => <Text key={e} style={{ color: flyColors.text, fontSize: 24, padding: 5, margin: 10, borderBottomWidth: 1 }}>{e}</Text>)}
        </View>
      </HeaderParallax>
    );
  }
}
