import React from 'react';
import { View, Text } from 'react-native';
import styles from './Style';
import { HeaderParallax, Button } from '../../components';
import GStyle from '../../utils/GlobalStyles';
import { inject, observer } from 'mobx-react/native';
import { AlertType, UserLevel } from '../../utils/Enums'
import i18n from '../../i18n';

@inject('AppStore')
@observer
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    console.log('[Profile] - User Level:', UserLevel.BABY);
  }

  onEditProfile = () => {
    this.props.AppStore.showLoader();
    setTimeout(() => {
      this.props.navigation.navigate('ProfileEdit')
      this.props.AppStore.hideLoader();
      console.log('set time out')
    }, 2000);
  }

  onShowAlert = () => {
    this.props.AppStore.showAlert({ type: AlertType.REGULAR, title: i18n.t('t_alert_general_title'), content: i18n.t('t_alert_general_conetent'), buttonText: i18n.t('t_close'), onClose: () => { console.log('Alert closed') } });
  }

  render() {
    return (
      <HeaderParallax
        backgroundColor={GStyle.BLACK}
        navbarColor={GStyle.BLACK}
        title={i18n.t('profile')}
      >
        <View style={{ backgroundColor: GStyle.BEIGE }}>
          <Button text={'Edit Profile'} onPress={this.onEditProfile} />
          <Button text={'Show Alert'} onPress={this.onShowAlert} />
          <Text style={{ fontSize: 24, color: GStyle.BLACK}}>Profile</Text>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(e => <Text key={e} style={{ color: GStyle.BLACK, fontSize: 24, padding: 5, margin: 10, borderBottomWidth: 1 }}>{e}</Text>)}
        </View>
      </HeaderParallax>
    );
  }
}
