import { Dimensions, Platform } from 'react-native';
import Color from "color";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const IS_SMALL_DEVICE = WIDTH < 375

const IS_IPHONE_X = HEIGHT === 812 || HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const rem = 16;
const SIZE = {
  XXXL: rem * 3.5, //56
  XXL2: rem * 1.8, //29
  XXL: rem * 1.75, //28
  XL: rem * 1.5, //25
  XL2: rem * 1.44, //23
  L: rem * 1.3, //21
  M: rem * 1.15,
  S: rem,
  XS: rem * 0.8,
};

const COLOR = {
  RED: 'rgb(255,0,0)',
  WHITE: 'rgb(255,255,255)',
  BLACK: 'rgb(0,0,0)',
  BEIGE: "rgb(238,219,187)",
  BEIGE_LIGHTEN: Color("rgb(238,219,187)").lighten(0.1),
  GREEN: "rgb(1,159,21)",
  PINK: "rgb(233,53,115)",
  YELLOW: "rgb(247,167,28)",
  CYAN: "rgb(98,215,255)",
  YELLOW_LIGHT: "rgb(255,220,55)",
  BORDO: "rgb(71,5,5)",
  BEIGEDARK: "rgb(202,150,104)",
  GREEN_PICKED: Color('rgb(1,159,21)').darken(0.3),
  GREEN_LIGHTEN: "rgb(202,255,183)",
  ORANGE: "rgb(246,60,15)",
  NEON: "rgb(210,210,230)"
};

export default {
  ...COLOR,
  ...SIZE,
  WIDTH,
  HEIGHT,
  IS_IPHONE_X,
  HEADER_HEIGHT,
  STATUS_BAR_HEIGHT,
  NAV_BAR_HEIGHT,
  IS_SMALL_DEVICE,
};
