

import { observable, action, computed, toJS } from 'mobx';
import { persist } from 'mobx-persist';
// import Api from '../../server/Api'
import I18n from '../../i18n'
import he from '../../i18n/locales/he'

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
  async getDictionary() {
    console.log('[UserStore] - getDictionary')
    console.log('I18n', I18n)
    const res = { profile: 'פרופיל' }//await Api.getDictionary()
    I18n.locale = this.lang;
    I18n.defaultLocale = I18n.locale
    I18n.translations = {
      he: { ...he ,...res }
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
    console.log('showLoader')
    this.loaderVisible = true;
  }

  @action
  hideLoader() {
    console.log('hideLoader')
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
