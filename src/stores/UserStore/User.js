import { observable, action, computed } from 'mobx';
import { observer, inject } from 'mobx-react/native';
import { create, persist } from 'mobx-persist';

class User {
    @persist @observable token;
    @persist @observable email;
    @persist @observable phone;
    @persist @observable firstName;
    @persist @observable lastName;

    @action
    setFirstName(fname) {
      return this.firstName = fname;
    }

    @action
    setLastName(lname) {
      return this.lastName = lname;
    }

    @action
    setToken(token) {
      return this.token = token;
    }

    @action
    setId(id) {
      return this.id = id;
    }

    @action
    setPhone(phone) {
      return this.phone = phone;
    }

    @computed
    get getFirstName() {
      return this.firstName;
    }

    @computed
    get getLastName() {
      return this.lastName;
    }


    @computed
    get getToken() {
      return this.token;
    }

    @computed
    get getId() {
      return this.id;
    }

    @computed
    get getPhone() {
      return this.phone;
    }

    @action
    logout() {
      this.token = null;
      this.id = null;
      this.phone = null;
    }

}

const user = new User();
export default user;
