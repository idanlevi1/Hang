import { createDrawerNavigator } from 'react-navigation';
import MainStackNavigator from './MainStackNavigator';
import GStyle from '../utils/GlobalStyles';
import { SideMenu } from '../components'
import { Animated, Easing, Platform } from "react-native";

export default MainDrawerNavigator = createDrawerNavigator({ MainStackNavigator }, {
  contentComponent: SideMenu,
  drawerPosition: Platform.OS === 'android' ? 'right' : 'left',
  drawerWidth: GStyle.WIDTH * .7,
  headerMode: 'none',
  disableGestures: true,
  transitionConfig: () => ({
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
  }),
})
