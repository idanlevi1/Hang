import React from 'react';
import { AsyncStorage } from 'react-native';
import { Splash } from './screens';
import App from './routes/App';
import { AppStore, UserStore } from './stores';
// import { Loader } from './components';
import { observer, Provider, inject } from 'mobx-react/native';

const stores = { AppStore, UserStore };
// const hydrate = create({
//   storage: AsyncStorage
// });

// hydrate('user', UserStore).then(() => {
//   UserStore.hydrateDone();
//   hydrate('rtl', AppStore).then(() => {
//       if (!AppStore.isRtl) {
//           I18nManager.forceRTL(true);
//           I18nManager.allowRTL(true);
//           AppStore.setRtl()
//           RNRestart.Restart();
//       }
//   })

// });

@observer
export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      splash: true,
      loggedIn: true,
    };
    // I18nManager.forceRTL(true);
  }

  async componentDidMount() {
    await AppStore.getDictionary()
    setTimeout(() => {
      this.setState({ splash: false });
    }, 2500);
  }

  render() {
    if (this.state.splash) {
      console.log('Splash Screen 🥂🍟🍔');
      return <Splash />;
    } return (
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
