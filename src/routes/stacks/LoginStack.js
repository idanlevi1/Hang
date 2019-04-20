import { createStackNavigator } from 'react-navigation';
import { Login } from '../../screens';

export default (LoginStack = createStackNavigator(
  {
    Login: Login,
  },
  { headerMode: 'none' }
));
