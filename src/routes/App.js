import React from 'react';
import { LoggedInStack, NonLoggedStack } from './AppNavigator';
import { inject, observer } from 'mobx-react/native';
import { Splash } from '../screens';

@inject('AppStore', 'UserStore', 'RoutingStore')
@observer
export default class App extends React.Component {
  state = {
    splash: true,
    loggedIn: true,
  };

  componentDidMount() {
    console.log('[user]:', { ...this.props.UserStore.getUser })
    this.props.UserStore.saveUserInfoData()
    this.props.UserStore.incEntriesNumber()
    setTimeout(() => { this.setState({ splash: false }) }, 500);
    // setTimeout(() => { this.setState({ loggedIn: true }) }, 500);
  }

  render() {
    if (this.state.splash) {
      console.log('Splash Screen 🍟');
      return <Splash />;
    } else if (this.state.loggedIn) {
      console.log('Home Screen 🥂');
      return <LoggedInStack ref={ref => { this.props.RoutingStore.setNavigation(ref) }} />;
    } else {
      console.log('Login Screen 🍔');
      return <NonLoggedStack />;
    }
  }
}
