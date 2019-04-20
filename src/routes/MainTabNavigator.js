import { createBottomTabNavigator } from 'react-navigation';
import DashboardStack from './stacks/DashboardStack';
import ProfileStack from './stacks/ProfileStack';
import ThePlaceStack from './stacks/ThePlaceStack';
import PromotionsStack from './stacks/PromotionsStack';
import { BRANDTS } from '../constants/Colors';
import {height} from '../constants/Layout';

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
        backgroundColor: BRANDTS.dark,
        borderWidth: 2,
        borderColor: BRANDTS.lightSec,
        height: height * 0.1,
        padding: 2,
      },
      activeTintColor: BRANDTS.primary,
      inactiveTintColor: BRANDTS.light,
    },
  }
));
