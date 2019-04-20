import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Profile, ProfileEdit } from '../../screens';
import { TabBarIcon } from '../../components';

export default (ProfileStack = createStackNavigator(
  {
    Profile: Profile,
    ProfileEdit: ProfileEdit
  },
  {
    headerMode: 'none',
  }
));

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'Profile' : 'Profile'}
    />
  ),
};
