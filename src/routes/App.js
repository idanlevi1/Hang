import React from 'react';
import { LoggedInStack, NonLoggedStack } from './AppNavigator';

export default class App extends React.Component {
  state = {
    loggedIn: true,
  };

  componentDidMount() {
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
