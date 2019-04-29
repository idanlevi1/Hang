import React from 'react';
import { LoggedInStack, NonLoggedStack } from './AppNavigator';
import { inject, observer } from 'mobx-react/native';

@inject('AppStore', 'UserStore')
@observer
export default class App extends React.Component {
  state = {
    loggedIn: true,
  };

  componentDidMount() {
    console.log('[user]:', { ...this.props.UserStore.getUser })
    this.props.UserStore.saveUserInfoData()
    this.props.UserStore.incEntriesNumber()
    this.setState({ loggedIn: true });
  }

  render() {
    if (this.state.loggedIn) {
      console.log('Home Screen');
      return <LoggedInStack />;
    } else {
      console.log('Login Screen');
      return <NonLoggedStack />;
    }
  }
}
