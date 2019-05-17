import { observable, action, computed, toJS, entries } from 'mobx';
import { persist } from 'mobx-persist';
import User from './User';
import DeviceInfo from 'react-native-device-info'
import moment from 'moment'

class UserStore {
  @persist('object', User) @observable user = User;
  @persist('list') @observable promotions = []
  @observable isHydrateDone = false;
  @persist @observable entriesNumber = 0;
  @persist('object') @observable deviceInfo = null;

  @action
  setUser(phone, email, token) {
    this.user.phone = phone;
    this.user.email = email;
    this.user.token = token;
  }

  @action
  async hydrateDone() {
    this.isHydrateDone = true;
  }

  @action
  setToken(token) {
    this.user.token = token;
  }

  @action
  incEntriesNumber() {
    this.entriesNumber = this.entriesNumber + 1;
    console.log('[entriesNumber:]', this.entriesNumber)
  }

  @action
  logout() {
    this.user = User;
  }

  @action
  saveUserInfoData() {
    console.log('First Time ?', !!this.deviceInfo)
    if (!this.deviceInfo) {
      this.deviceInfo = {
        deviceId: DeviceInfo.getDeviceId(),
        deviceLocale: DeviceInfo.getDeviceLocale(),
        phoneNumber: DeviceInfo.getPhoneNumber(),
        deviceCountry: DeviceInfo.getDeviceCountry(),
        firstInstallTime: moment(DeviceInfo.getFirstInstallTime()).format("DD-MM-YYYY"),
        brand: DeviceInfo.getBrand(),
        readableVersion: DeviceInfo.getReadableVersion()
      }
    }
    console.log('[deviceInfo]:', toJS(this.deviceInfo))
  }

  @action
  cleanUserLocalStorage() {
    this.user = User;
    this.promotions = null;
    this.deviceInfo = null;
    console.log('[UserStore]: cleanUserLocalStorage')
  }

  @computed
  get getUser() {
    return this.user;
  }

  @computed
  get getToken() {
    return this.user.token;
  }

  @computed
  get getPhone() {
    return this.user.phone;
  }

  @computed
  get getDeviceInfo() {
    return toJS(this.deviceInfo);
  }

}

const userStore = new UserStore();
export default userStore;
