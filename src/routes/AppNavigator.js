import { createStackNavigator } from 'react-navigation';
import MainDrawerNavigator from '../routes/MainDrawerNavigator';
import LoginStack from '../routes/stacks/LoginStack';

const LoggedInStack = createStackNavigator(
  {
    App: MainDrawerNavigator,
  },
  {
    headerMode: 'none',
  }
);

const NonLoggedStack = createStackNavigator(
  {
    Home: LoginStack,
  },
  {
    headerMode: 'none',
  }
);

export { LoggedInStack, NonLoggedStack };
