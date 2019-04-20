import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Information, ThePlace } from '../../screens';
import { TabBarIcon } from '../../components';

export default (ThePlaceStack = createStackNavigator(
  {
    ThePlace: ThePlace,
    Information: Information,
  },
  {
    headerMode: 'none',
  }
));

ThePlaceStack.navigationOptions = {
  tabBarLabel: 'ThePlace',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ThePlace' : 'ThePlace'}
    />
  ),
};
