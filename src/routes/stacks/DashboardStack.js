import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Home } from '../../screens';
import { TabBarIcon } from '../../components';

export default (DashboardStack = createStackNavigator(
  {
    Home: Home,
  },
  {
    headerMode: 'none',
  }
));

DashboardStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'Home' : 'Home'}
    />
  ),
};
