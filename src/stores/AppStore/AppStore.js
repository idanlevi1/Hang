

import { observable, action, computed } from 'mobx';
import { observer, inject } from 'mobx-react/native';
import { persist } from 'mobx-persist';

class AppStore {
    @persist @observable rtl = false;
    @observable alertRef;
    @observable alertVisible = false;
    modalInAir = false;
    @observable loaderRef;
    @observable loaderVisible = false;

    @action
    setRtl() {
      return this.rtl = true;
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
