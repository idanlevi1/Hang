import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Promotions } from '../../screens';
import { TabBarIcon } from '../../components';

export default (PromotionsStack = createStackNavigator(
  {
    Promotions: Promotions,
  },
  {
    headerMode: 'none',
  }
));

PromotionsStack.navigationOptions = {
  tabBarLabel: 'Promotions',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'Promotions' : 'Promotions'}
    />
  ),
};
