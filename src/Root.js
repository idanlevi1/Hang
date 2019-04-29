import React from 'react';
import { AppState, AsyncStorage, I18nManager } from 'react-native';
import { Splash } from './screens';
import App from './routes/App';
import { AppStore, UserStore } from './stores';
// import { Alert, Loader } from '../components';
import { observer, Provider, inject } from 'mobx-react/native';
import { create } from 'mobx-persist'
// import RNRestart from 'react-native-restart';

const stores = { AppStore, UserStore };
const hydrate = create({ storage: AsyncStorage });

hydrate('deviceInfo', UserStore).then(() => {
  hydrate('user', UserStore).then(() => {
    hydrate('rtl', AppStore).then(() => {
      if (!AppStore.isRtl) {
        I18nManager.forceRTL(true);
        I18nManager.allowRTL(true);
        AppStore.setRtl()
        // RNRestart.Restart();
      }
      UserStore.hydrateDone();
    })
  })

})

@observer
export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      splash: true,
      loggedIn: true,
    };
  }

  async componentDidMount() {
    await AppStore.getDictionary()
    AppState.addEventListener('change', this._handleAppStateChange);
    setTimeout(() => {
      this.setState({ splash: false });
    }, 500);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = async (nextAppState) => {
    // console.log('_handleAppStateChange', nextAppState) //options: active || background || inactive 
  };

  render() {
    const ready = UserStore.isHydrateDone;
    if (!ready) {
      console.log('Splash Screen 🥂🍟🍔');
      return <Splash />;
    }
    return (
      <Provider {...stores} >
        <React.Fragment>
          <App />
          {/*<Alert onRef={(ref) => { stores.AppStore.setAlertRef(ref) }} /> */}
          {/*<Loader onRef={(ref) => { stores.AppStore.setLoaderRef(ref) }} />*/}
        </React.Fragment>
      </Provider>
    )
  }
}
