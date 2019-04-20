import { observable, action, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react/native';
import { create, persist } from 'mobx-persist';
import User from './User';
// import DeviceInfo from 'react-native-device-info'

class UserStore {
  @persist('object', User) @observable user = User;
  @persist('list') @observable promotions = []
  @observable isHydrateDone = false;

  @action
  setUser(phone, email, token) {
    this.user.phone = phone;
    this.user.email = email;
    this.user.token = token;
  }

  @action
  setToken(token) {
    this.user.token = token;
  }

  @action
  logout() {
    this.token = null;
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

  @action
  async hydrateDone() {
    this.isHydrateDone = true;
  }

}

const userStore = new UserStore();
export default userStore;
