import { createStackNavigator } from 'react-navigation';
import MainTabNavigator from '../routes/MainTabNavigator';
import LoginStack from '../routes/stacks/LoginStack';

const LoggedInStack = createStackNavigator(
  {
    App: MainTabNavigator,
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
