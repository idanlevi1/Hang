import { createBottomTabNavigator } from 'react-navigation';
import DashboardStack from './stacks/DashboardStack';
import ProfileStack from './stacks/ProfileStack';
import ThePlaceStack from './stacks/ThePlaceStack';
import PromotionsStack from './stacks/PromotionsStack';
import GStyle from '../utils/GlobalStyles';

export default (MainTabNavigator = createBottomTabNavigator(
  {
    Dashboard: DashboardStack,
    Profile: ProfileStack,
    ThePlace: ThePlaceStack,
    Promotions: PromotionsStack,
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: GStyle.BLACK,
        borderWidth: 2,
        borderColor: GStyle.BLACK,
        height: GStyle.HEIGHT * 0.1,
        padding: 2,
      },
      activeTintColor: GStyle.WHITE,
      inactiveTintColor: GStyle.BLACK,
    },
  }
));
