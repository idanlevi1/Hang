import { createStackNavigator } from 'react-navigation';
import DashboardStack from './stacks/DashboardStack';
import ProfileStack from './stacks/ProfileStack';
import ThePlaceStack from './stacks/ThePlaceStack';
import PromotionsStack from './stacks/PromotionsStack';
import {Scanner} from '../screens';

export default MainStackNavigator = createStackNavigator(
	{
		Dashboard: DashboardStack,
		Profile: ProfileStack,
		ThePlace: ThePlaceStack,
		Promotions: PromotionsStack,
		Scanner: Scanner,
	},
	{
		headerMode: 'none',
	}
);
