import { observable, action, computed, toJS } from 'mobx';
import { persist } from 'mobx-persist';
// import Api from '../../server/Api'
import I18n from '../../i18n'
import he from '../../i18n/locales/he'
import en from '../../i18n/locales/en'
import DeviceInfo from 'react-native-device-info'
import { I18nManager } from 'react-native';

class AppStore {
  @persist @observable rtl = false;
  @observable alertRef;
  @observable alertVisible = false;
  modalInAir = false;
  @observable loaderRef;
  @observable loaderVisible = false;
  @persist @observable language = null;

  @action
  switchToRTL() {
    I18nManager.forceRTL(true);
    I18nManager.allowRTL(true);
    this.rtl = true
  }

  @action
  switchToLTR() {
    I18nManager.forceRTL(false);
    I18nManager.allowRTL(false);
    this.rtl = false
  }

  @action
  setLanguage(language) {
    if (this.language !== language) {
      this.language = language
      this.getDictionary()
      language === 'he' ? this.switchToRTL() : this.switchToLTR()
    }
  }

  @action
  async getDictionary() {
    I18n.locale = 'he'// this.language ? this.language : DeviceInfo.getDeviceLocale();
    this.language = I18n.locale.substring(0, 2)
    let res = {}
    switch (this.language) {
      case 'he':
        res = { profile: '.פרופיל' }//await Api.getDictionary()
        break;
      case 'en':
        res = { profile: 'profile.' }//await Api.getDictionary()
        break;
      default:
        res = { profile: 'profile.' }//await Api.getDictionary()
        break;
    }
    I18n.defaultLocale = I18n.locale
    I18n.translations = {
      he: { ...he, ...res },
      en: { ...en, ...res }
    }
    console.log('[getDictionary] I18n', this.language, I18n, this.rtl)
  }

  @action
  setAlertRef(alertRef) {
    this.alertRef = alertRef;
  }

  @action
  async showAlert(info) {
    // while (true) {
    //   if (!this.modalInAir) {
    //     this.modalInAir = true;
    this.alertRef.setModalVisible(info);
    this.alertVisible = true;
    //     break;
    //   } else {
    //     await new Promise((resolve, reject) => { setTimeout(() => resolve(), 350); });
    //   }
    // }
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

  @action
  cleanAppLocalStorage() {
    this.rtl = false;
    this.language = null;
    console.log('[AppStore]: cleanAppLocalStorage')
  }

  @computed
  get isRtl() {
    return this.rtl;
  }

}

const appStore = new AppStore();
export default appStore;
