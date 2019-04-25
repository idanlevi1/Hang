import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Style';
import { Button, HeaderParallax } from '../../components';
import { flyColors } from '../../constants/Colors'
// import Share from 'react-native-share'
import Api from '../../server/Api'

const apiUrlExample = 'https://1.base.maps.api.here.com/maptile/2.1/maptile/newest/normal.day/11/525/761/256/png8?output=base64&app_id=devportal-demo-20180625&app_code=9v2BkviRwi9Ot26kp2IysQ'

export default class HOME extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  onShare = async (file) => {
    try {
      let response = await fetch(apiUrlExample, { timeout: 10000 })
      console.log('response', response)
      const file = "data:image/jpeg;base64," + response._bodyText
      this.onShare(file)
      const shareOptions = { title: 'Share via', url: file };
      setTimeout(() => {
        // Share.open(shareOptions)
      }, 100);
    } catch (e) {
      console.log('on share error', e)
      //this.props.AppStore.showAlert({ type: AlertType.REGULAR, title: i18n.t('moment'), content: e, buttonText: i18n.t('close') })
    }
  };

  render() {
    return (
      <HeaderParallax
        backgroundImage={require('../../../assets/images/Header/dashboard.jpg')}
        backgroundColor={flyColors.header}
        navbarColor={flyColors.header}
        title='Home'>
        <View style={{ backgroundColor: flyColors.background }}>
          <TouchableOpacity onPress={this.onShare}>
            <Text>Share</Text>
          </TouchableOpacity>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(e => <Text key={e} style={{ color: flyColors.text, fontSize: 24, padding: 5, margin: 10, borderBottomWidth: 1 }}>{e}</Text>)}
        </View>
      </HeaderParallax>
    );
  }
}
