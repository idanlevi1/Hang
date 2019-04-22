

import { observable, action, computed } from 'mobx';
import { observer, inject } from 'mobx-react/native';
import { persist } from 'mobx-persist';
// import Api from '../../server/Api'
import I18n from '../../i18n'
import DeviceInfo from 'react-native-device-info';

class AppStore {
  @persist @observable rtl = false;
  @observable alertRef;
  @observable alertVisible = false;
  modalInAir = false;
  @observable loaderRef;
  @observable loaderVisible = false;
  @observable lang = 'he';

  @action
  setRtl() {
    return this.rtl = true;
  }

  @action
  saveUserInfoData() {
    const deviceId = DeviceInfo.getDeviceId()
    const deviceLocale = DeviceInfo.getDeviceLocale()
    const phoneNumber = DeviceInfo.getPhoneNumber()
    const deviceCountry = DeviceInfo.getDeviceCountry()
    const firstInstallTime = DeviceInfo.getFirstInstallTime()
    const brand = DeviceInfo.getBrand();
    const readableVersion = DeviceInfo.getReadableVersion();
    console.log('[saveUserInfoData] - deviceId:', deviceId)
    console.log('[saveUserInfoData] - deviceLocale:', deviceLocale)
    console.log('[saveUserInfoData] - phoneNumber:', phoneNumber)
    console.log('[saveUserInfoData] - deviceCountry:', deviceCountry)
    console.log('[saveUserInfoData] - firstInstallTime:', firstInstallTime)
    console.log('[saveUserInfoData] - brand:', brand)
    console.log('[saveUserInfoData] - readableVersion:', readableVersion)
  }

  @action
  async getDictionary() {
    const res = { back: 'חזור', profile: 'פרופיל' }//await Api.getDictionary()
    I18n.locale = this.lang;
    I18n.defaultLocale = I18n.locale
    I18n.translations = {
      he: { ...res }
    }
  }

  @action
  setAlertRef(alertRef) {
    console.log('alert ref - AppStore');
    this.alertRef = alertRef;
  }

  @action
  async showAlert(info) {
    while (true) {
      if (!this.modalInAir) {
        this.modalInAir = true;
        this.alertRef.setModalVisible(info);
        this.alertVisible = true;
        break;
      } else {
        await new Promise((resolve, reject) => { setTimeout(() => resolve(), 350); });
      }
    }
  }

  @action
  setAlertInVisible() {
    this.alertVisible = false;
  }

  @action
  setLoaderRef(loaderRef) {
    this.loaderRef = loaderRef;
  }

  @action
  showLoader() {
    this.loaderVisible = true;
  }

  @action
  hideLoader() {
    this.loaderVisible = false;
  }

  @action
  onModalHide() {
    this.modalInAir = false;
  }

  @computed
  get isRtl() {
    return this.rtl;
  }

}

const appStore = new AppStore();
export default appStore;
