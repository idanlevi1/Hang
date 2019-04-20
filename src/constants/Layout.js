import { Dimensions, Platform } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const IS_SMALL_DEVICE = width < 375

const IS_IPHONE_X = height === 812 || height === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export {
  width,
  height,
  IS_IPHONE_X,
  HEADER_HEIGHT,
  STATUS_BAR_HEIGHT,
  NAV_BAR_HEIGHT,
  IS_SMALL_DEVICE,
};
